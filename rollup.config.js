import 'ts-node/register';
import alias from '@rollup/plugin-alias';
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
  'login',
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
    alias({
      entries: [
        { find: 'marked', replacement: 'marked/lib/marked.esm.js' },
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
  manualChunks,
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

function manualChunks(id) {
  return helpersChunk()
      || chunkPerSubDir('common')
      || chunkPerSubDir('generic')
      || chunkByModule();

  function chunkPerSubDir(dir) {

    const prefix = path.join(__dirname, 'src', dir) + path.sep;

    if (!id.startsWith(prefix)) {
      return;
    }
    id = id.substring(prefix.length);

    const idx = id.indexOf(path.sep);

    if (idx < 0) {
      return `${dir}`;
    }

    return `${dir}/${id.substring(0, idx)}`;
  }

  function helpersChunk() {
    return id.startsWith('\0') && 'helpers';
  }

  function chunkByModule() {

    const nodeModulesPrefix = `${path.sep}node_modules${path.sep}`;
    const moduleIdStart = id.indexOf(nodeModulesPrefix);

    if (moduleIdStart < 0) {
      return;
    }

    id = id.substring(moduleIdStart + nodeModulesPrefix.length);

    const slashIdx = id.indexOf(path.sep);
    let scope;
    let module;

    if (!id.startsWith('@')) {
      scope = 'lib';
      module = id.substring(0, slashIdx);
    } else {
      scope = id.substring(1, slashIdx);
      module = id.substring(slashIdx + 1, id.indexOf(path.sep, slashIdx + 1));
    }

    return `${scope}/${module}`;
  }
}
