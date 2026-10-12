import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = path.join(root, 'mockups');
const output = path.join(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

const browserAssets = ['experiments.css', 'explorer.css', 'explorer-ribbons.css', 'experiments.js', 'explorer-ribbons.js', 'site-content.js', 'publications.js', 'theme.js'];
const versions = new Map();
for (const name of ['assets', 'downloads', ...browserAssets]) {
  await cp(path.join(source, name), path.join(output, name), { recursive: true });
  if (browserAssets.includes(name)) {
    versions.set(name, createHash('sha256').update(await readFile(path.join(source, name))).digest('hex').slice(0, 12));
  }
}

// Content hashes invalidate browser caches only when an asset changes.
const versionAssets = html => {
  for (const [name, version] of versions) {
    html = html.replaceAll(`src="${name}"`, `src="${name}?v=${version}"`)
      .replaceAll(`href="${name}"`, `href="${name}?v=${version}"`);
  }
  return html;
};

for (const name of ['explorer.html', 'explorer-ribbons.html', 'index.html']) {
  const html = versionAssets((await readFile(path.join(source, name), 'utf8')).replaceAll('href="index.html"', 'href="comparison.html"'));
  await writeFile(path.join(output, name === 'index.html' ? 'comparison.html' : name), html);
}

const ribbon = await readFile(path.join(source, 'explorer-ribbons.html'), 'utf8');
const homepage = ribbon
  .replace('<title>G. Burch Fisher | Ribbon Explorer</title>', '<title>G. Burch Fisher | UMCES</title><meta name="description" content="G. Burch Fisher, Associate Research Scientist at the University of Maryland Center for Environmental Science. Research, publications, data, code, visualizations, and teaching.">')
  .replace(/  <div class="round-nav">.*?<\/div>\n/, '');
await writeFile(path.join(output, 'index.html'), versionAssets(homepage));
await writeFile(path.join(output, '.nojekyll'), '');
console.log('Built ribbon homepage and both alternate previews in dist/');
