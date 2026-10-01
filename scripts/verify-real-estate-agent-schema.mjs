import fs from 'node:fs';
import path from 'node:path';
import { siteConfig } from '../src/data/site.ts';

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

console.log('SiteConfig Reference:');
console.log('  name:', siteConfig.businessName);
console.log('  telephone:', siteConfig.phone);
console.log('  address:', JSON.stringify(siteConfig.address));

const discrepancies = [];

for (const file of astroFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes('RealEstateAgent')) continue;
  
  console.log(`\nChecking RealEstateAgent in: ${file}`);
  
  // Check telephone
  if (content.includes("'@type': 'RealEstateAgent'") || content.includes('"@type": "RealEstateAgent"')) {
    // Check if telephone is set via siteConfig.phone or literal
    const phoneMatch = content.match(/telephone:\s*([^,\n]+)/);
    const nameMatch = content.match(/name:\s*([^,\n]+)/);
    
    console.log(`  telephone expression: ${phoneMatch ? phoneMatch[1].trim() : 'NONE'}`);
    console.log(`  name expression: ${nameMatch ? nameMatch[1].trim() : 'NONE'}`);
    
    // Check address fields
    const hasAddressLocality = content.includes('addressLocality: siteConfig.address.locality') || content.includes("addressLocality: 'Sebring'") || content.includes('addressLocality: "Sebring"');
    const hasAddressRegion = content.includes('addressRegion: siteConfig.address.region') || content.includes("addressRegion: 'Florida'") || content.includes('addressRegion: "Florida"');
    const hasPostalCode = content.includes('postalCode: siteConfig.address.postalCode') || content.includes("postalCode: '33872'") || content.includes('postalCode: "33872"');
    const hasAddressCountry = content.includes('addressCountry: siteConfig.address.country') || content.includes("addressCountry: 'US'") || content.includes('addressCountry: "US"');
    
    console.log(`  address fields present: Locality:${hasAddressLocality}, Region:${hasAddressRegion}, Postal:${hasPostalCode}, Country:${hasAddressCountry}`);
    
    if (!hasAddressLocality || !hasAddressRegion || !hasPostalCode || !hasAddressCountry) {
      discrepancies.push(`${file}: address fields incomplete`);
    }
  }
}

if (discrepancies.length > 0) {
  console.log('\nDiscrepancies found:');
  discrepancies.forEach(d => console.log('  X ' + d));
} else {
  console.log('\nAll RealEstateAgent schemas match siteConfig address fields!');
}
