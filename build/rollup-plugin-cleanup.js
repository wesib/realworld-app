import glob from 'glob';
import fs from 'fs-extra';

export default function cleanup(what) {

  function clear() {
    return new Promise((resolve, reject) => glob(what, (err, files) => {
      if (err) {
        reject(err);
      } else if (!files.length) {
        resolve(null);
      } else {
        console.log(`Removing files: ${files.join(', ')}`);
        resolve(Promise.all(files.map(file => fs.remove(file))).then(() => null));
      }
    }));
  }

  return {
    name: 'cleanup',
    buildStart: clear,
    load: clear,
  };
}
