import handlebars from 'handlebars';
import fs from 'fs-extra';
import '../src/template/index.ts';

const pagePattern = /([^/\\]+)[/\\]([^/]+\.js)$/;
const rev = Date.now().toString(32);
const dist = './dist';

async function generateHtml(context, name) {

  const [, page, module] = pagePattern.exec(name);

  if (page === 'js') {
    return; // Not page
  }

  const isHome = page === 'home';
  const input = `./src/pages/${page}/${page}.html`;
  const output = isHome ? `${dist}/index.html` : `${dist}/${page}/index.html`;
  const template = handlebars.compile(await fs.readFile(input, 'utf8'));
  const html = template({
    module,
    rev,
    base: isHome ? '.' : '..',
  });

  await fs.outputFile(output, html, { encoding: 'utf8' });
}

export default {
  name: 'generate-page-html',
  generateBundle(_opts, bundle) {
    return Promise.all(Object.entries(bundle)
        .map(([name]) => generateHtml(this, name)));
  },
};
