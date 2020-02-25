import handlebars from 'handlebars';
import fs from 'fs-extra';
import { renderSync } from 'sass';
import '../src/template/index.ts';

const pagePattern = /([^/\\]+)[/\\]([^/]+\.js)$/;
const rev = Date.now().toString(32);
const dist = './dist';

async function generateHtml(context, name, info) {
  if (!info.isEntry) {
    return; // Not a page.
  }

  const [, page, file] = pagePattern.exec(name);
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
    file: './src/style.scss',
    importer: npmModule,
    outFile: `css/style.css`,
    outputStyle: 'compressed',
    sourceMap: true,
    sourceMapContents: true,
  });

  await Promise.all([
      fs.outputFile(`${dist}/css/style.css`, result.css, { encoding: 'utf8' }),
      fs.outputFile(`${dist}/css/style.css.map`, result.map, { encoding: 'utf8' }),
  ]);
}

function npmModule(url) {
  if (url.startsWith('~')) {

    const id = url.substring(1);

    try {
      return { file: require.resolve(`${id}.scss`) };
    } catch (e) {/* noop */}
    try {
      return { file: require.resolve(id) };
    } catch (e) {/* noop */}
  }
  return { file: url };
}

export default {
  name: 'generate-page-html',
  generateBundle(_opts, bundle) {
    return Promise.all([
      generateSass(),
      ...Object.entries(bundle).map(([name, info]) => generateHtml(this, name, info)),
    ]);
  },
};
