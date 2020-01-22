import 'ts-node/register';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import path from 'path';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import ts from 'rollup-plugin-typescript2';
import typescript from 'typescript';

import cleanup from './build/rollup-plugin-cleanup';
import generateHtml from './build/rollup-plugin-generate-html';

const pages = [
  'article',
  'editor',
  'home',
  'profile',
  'register',
  'settings',
];

export default {
  input: pages.reduce(
      (prev, entry) => ({
        ...prev,
        [entry]: `./src/pages/${entry}/index.ts`,
      }),
      {},
  ),
  plugins: [
    ts({
      typescript,
      cacheRoot: 'target/.rts2_cache',
      objectHashIgnoreUnknownHack: true,
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
  manualChunks(id) {
    if (id.startsWith(path.join(__dirname, 'src', 'common') + path.sep)) {
      return 'common';
    }
    if (id.includes(`${path.sep}node_modules${path.sep}@wesib${path.sep}`)) {
      return 'wesib';
    }
    if (id.startsWith('\0') || id.includes(`${path.sep}node_modules${path.sep}`)) {
      return 'lib';
    }
  },
  output: {
    format: module ? 'esm' : 'system',
    dir: './dist',
    sourcemap: true,
    entryFileNames: `[name]/main.[hash].js`,
    chunkFileNames: `js/[name].[hash].js`,
  },
};
