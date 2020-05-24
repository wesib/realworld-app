import { promises as fs } from 'fs';
import glob from 'glob';
import { promisify } from 'util';

export default function cleanup(what) {

  async function clear() {

    const files = await promisify(glob)(what);

    console.log('Removing files', ...files);
    await Promise.all(files.map(
        file => fs.unlink(file),
    ));
  }

  return {
    name: 'cleanup',
    buildStart: clear,
  };
}
