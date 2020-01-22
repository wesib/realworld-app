import handlebars from 'handlebars';
import fs from 'fs-extra';
import { renderSync } from 'sass';
import '../src/template/index.ts';

const pagePattern = /([^/\\]+)[/\\]([^/]+\.js)$/;
const rev = Date.now().toString(32);
const dist = './dist';

async function generateHtml(context, name) {

  const [, page, file] = pagePattern.exec(name);

  if (page === 'js') {
    return; // Not page
  }

  const isHome = page === 'home';
  const input = `./src/pages/${page}/${page}.html`;
  const output = isHome ? `${dist}/index.html` : `${dist}/${page}/index.html`;
  const template = handlebars.compile(await fs.readFile(input, 'utf8'));
  const html = template({
    module: `${page}/${file}`,
    rev,
    base: isHome ? '.' : '..',
    style: 'css/style.css',
  });

  await fs.outputFile(output, html, { encoding: 'utf8' });
}

async function generateSass() {
  const result = renderSync({
    file: './src/pages/style.scss',
    outFile: `css/style.css`,
    outputStyle: 'compressed',
    sourceMap: true,
    sourceMapContents: true,
    importer(url) {
      if (url.startsWith('~')) {
        return { file: require.resolve(url.substring(1)) };
      }
    },
  });

  await Promise.all([
      fs.outputFile(`${dist}/css/style.css`, result.css, { encoding: 'utf8' }),
      fs.outputFile(`${dist}/css/style.css.map`, result.map, { encoding: 'utf8' }),
  ]);
}

export default {
  name: 'generate-page-html',
  generateBundle(_opts, bundle) {
    return Promise.all([
      generateSass(),
      ...Object.keys(bundle).map(name => generateHtml(this, name)),
    ]);
  },
};
