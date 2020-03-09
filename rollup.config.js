import 'ts-node/register';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import ts from 'rollup-plugin-typescript2';
import typescript from 'typescript';

import cleanup from './build/rollup-plugin-cleanup';
import generateHtml from './build/rollup-plugin-generate-html';
import manualChunks from './build/rollup-plugin-manual-chunks';

const pages = [
  'article',
  'editor',
  'home',
  'login',
  'profile',
  'register',
  'settings',
];

export default {
  input: pages.reduce(
      (prev, entry) => ({
        ...prev,
        [entry]: `./src/pages/${entry}/main.ts`,
      }),
      {},
  ),
  plugins: [
    manualChunks, // Should be before any other resolution plugin!
    alias({
      entries: [
        { find: 'marked', replacement: require.resolve('marked/lib/marked.esm.js') },
      ],
    }),
    ts({
      typescript,
      cacheRoot: 'target/.rts2_cache',
    }),
    cleanup(`./dist/**/*.{js,js.map}`),
    commonjs(),
    sourcemaps(),
    nodeResolve(),
    generateHtml,
    terser({
      ecma: 6,
      module: true,
      toplevel: true,
      output: {
        ascii_only: true,
        comments: false,
      },
    }),
  ],
  output: {
    format: module ? 'esm' : 'system',
    dir: './dist',
    sourcemap: true,
    compact: true,
    entryFileNames: `[name]/main.[hash].js`,
    chunkFileNames: `js/[name].[hash].js`,
    hoistTransitiveImports: false,
  },
};
