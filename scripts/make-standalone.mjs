import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const dist = resolve('dist');
let html = await readFile(resolve(dist, 'index.html'), 'utf8');

const cssHref = html.match(/<link rel="stylesheet" crossorigin href="(.+?)">/)?.[1];
const jsSrc = html.match(/<script type="module" crossorigin src="(.+?)"><\/script>/)?.[1];

if (!cssHref || !jsSrc) {
  throw new Error('Could not find the generated CSS or JavaScript bundle.');
}

const localPath = (url) => resolve(dist, url.replace(/^\.\//, ''));
const [css, js] = await Promise.all([
  readFile(localPath(cssHref), 'utf8'),
  readFile(localPath(jsSrc), 'utf8'),
]);

const jsDataUrl = `data:text/javascript;base64,${Buffer.from(js).toString('base64')}`;

html = html
  .replace(/<link rel="stylesheet" crossorigin href=".+?">/, `<style>${css}</style>`)
  .replace(/<script type="module" crossorigin src=".+?"><\/script>/, `<script type="module" src="${jsDataUrl}"><\/script>`);

await writeFile(resolve(dist, 'portfolio.html'), html, 'utf8');
console.log('Created dist/portfolio.html (standalone, double-click ready)');
