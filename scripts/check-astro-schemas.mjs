import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith('.astro')) {
      results.push(fullPath);
    }
  });
  return results;
}

const astroFiles = walk('src/pages');
astroFiles.push('src/layouts/BaseLayout.astro', 'src/layouts/BlogPostLayout.astro');

console.log(`Auditing ${astroFiles.length} files...`);

for (const file of astroFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = file;
  
  const hasSchema = content.includes('schema=') || content.includes('application/ld+json');
  if (!hasSchema) {
    if (!content.includes('Astro.redirect')) {
      console.log(`[NO SCHEMA PROP] ${rel}`);
    }
    continue;
  }
  
  // Find schema variable name
  const match = content.match(/schema=\{([^}]+)\}/);
  const schemaVar = match ? match[1] : 'inline';
  
  // Check for REALTOR in content where schema is defined
  const schemaSectionMatch = content.match(/const\s+(?:pageSchema|aboutSchema|contactSchema|homepageSchema|testimonialsSchema|neighborhoodSchema|articleSchema|realEstateAgentSchema)[\s\S]*?;\n/);
  const schemaSection = schemaSectionMatch ? schemaSectionMatch[0] : '';
  
  const hasRealtorInSchema = /REALTOR/i.test(schemaSection);
  const hasAggregateRating = /AggregateRating/i.test(schemaSection);
  
  console.log(`\n--- ${rel} (var: ${schemaVar}) ---`);
  if (hasRealtorInSchema) console.log(`  [ALERT] REALTOR found in schema!`);
  if (hasAggregateRating) console.log(`  [ALERT] AggregateRating found in schema!`);
  
  // Extract schema types mentioned
  const types = [...schemaSection.matchAll(/'@type':\s*'([^']+)'/g)].map(m => m[1]);
  console.log(`  Types: [${types.join(', ')}]`);
}
