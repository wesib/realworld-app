import path from 'path';
import pkg from '../package.json';

let chunksByDir;

export default {
  name: 'manual-chunks',
  async resolveId() {
    if (!chunksByDir) {
      chunksByDir = new Map();
      await Promise.all([
        Object.keys(pkg.devDependencies)
            .map(dep => {
              if (dep.startsWith('@types/')) {
                return Promise.resolve();
              }
              return this.resolve(dep, __filename, { skipSelf: true }).then(
                  resolution => {
                    if (!resolution) {
                      return;
                    }

                    const { id } = resolution;
                    let dir = path.dirname(id);

                    // Remove generic distribution sub-dirs
                    if (path.basename(dir) === 'js') {
                      dir = path.dirname(dir);
                    }
                    if (path.basename(dir) === 'lib') {
                      dir = path.dirname(dir);
                    }
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
            }),
      ]);
    }
    return null;
  },
  options(options) {
    options.manualChunks = manualChunks;

    return options;

    function manualChunks(id) {
      return helpersChunk()
          || coreChunk()
          || moduleChunk();

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
        if (!chunksByDir) {
          return;
        }
        for (const [dir, chunk] of chunksByDir.entries()) {
          if (id.startsWith(dir)) {
            return chunk;
          }
        }
      }
    }
  },
};
