import path from 'path';
import pkg from '../package.json';

const chunksByDir = new Map();

export default {
  name: 'manual-chunks',
  buildStart() {
    Object.keys(pkg.devDependencies).forEach(
        dep => {
          if (dep.startsWith('@types/')) {
            return;
          }

          const id = require.resolve(dep);
          let dir = path.dirname(id);

          if (path.basename(dir) === 'dist') {
            dir = path.dirname(dir);
          }

          let chunk;

          if (dep.startsWith('@')) {

            const [group, module] = dep.split('/', 3);

            chunk = group.substring(1) + path.sep + module;
          } else {
            chunk = 'lib' + path.sep + dep;
          }

          chunksByDir.set(dir + path.sep, chunk);
        },
    );
  },
  options(options) {
    options.manualChunks = manualChunks;

    return options;

    function manualChunks(id) {
      return helpersChunk()
          || moduleChunk()
          || coreChunk();

      function helpersChunk() {
        return id.startsWith('\0') && 'helpers';
      }

      function coreChunk() {

        const prefix = path.join(__dirname, 'src', 'core') + path.sep;

        if (!id.startsWith(prefix)) {
          return;
        }
        id = id.substring(prefix.length);

        const idx = id.indexOf(path.sep);

        if (idx < 0) {
          return 'core';
        }

        return `core/${id.substring(0, idx)}`;
      }

      function moduleChunk() {
        for (const [dir, chunk] of chunksByDir.entries()) {
          if (id.startsWith(dir)) {
            return chunk;
          }
        }
      }
    }
  },
};
