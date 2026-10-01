import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== '_astro') results = results.concat(walk(fullPath));
    } else if (file.endsWith('.astro')) {
      results.push(fullPath);
    }
  });
  return results;
}

const astroFiles = walk('src/pages');
astroFiles.push('src/layouts/BaseLayout.astro', 'src/layouts/BlogPostLayout.astro');

for (const file of astroFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes('RealEstateAgent')) continue;
  
  // Find RealEstateAgent block
  const reaIndex = content.indexOf("'@type': 'RealEstateAgent'");
  if (reaIndex === -1) {
    const reaIndex2 = content.indexOf('"@type": "RealEstateAgent"');
    if (reaIndex2 === -1) continue;
  }
  
  // Slice around reaIndex
  const start = Math.max(0, reaIndex - 50);
  const snippet = content.slice(start, start + 800);
  
  console.log(`\n================================`);
  console.log(`FILE: ${file}`);
  console.log(`================================`);
  console.log(snippet.slice(0, 500));
}
