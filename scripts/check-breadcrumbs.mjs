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
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = walk('dist/client');

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative('dist/client', file);
  
  const schemaMatches = [...content.matchAll(/<script[^>]*type=["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script>/gi)];
  if (schemaMatches.length === 0) continue;
  
  for (const match of schemaMatches) {
    try {
      const data = JSON.parse(match[1]);
      const graph = data['@graph'] || (Array.isArray(data) ? data : [data]);
      const breadcrumb = graph.find(item => item['@type'] === 'BreadcrumbList');
      if (!breadcrumb) continue;
      
      const items = breadcrumb.itemListElement || [];
      const trail = items.map(it => `${it.position}: ${it.name} (${it.item})`).join(' -> ');
      console.log(`[BREADCRUMB] ${rel}`);
      console.log(`   Trail: ${trail}`);
    } catch (e) {
      console.error(`Error in ${rel}:`, e.message);
    }
  }
}
