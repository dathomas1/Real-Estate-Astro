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

let totalFaqChecks = 0;
let mismatchCount = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative('dist/client', file);
  
  // Extract JSON-LD script content
  const schemaMatches = [...content.matchAll(/<script[^>]*type=["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script>/gi)];
  if (schemaMatches.length === 0) continue;
  
  for (const match of schemaMatches) {
    try {
      const data = JSON.parse(match[1]);
      const graph = data['@graph'] || (Array.isArray(data) ? data : [data]);
      const faqSchema = graph.find(item => item['@type'] === 'FAQPage');
      
      if (!faqSchema || !faqSchema.mainEntity) continue;
      
      console.log(`\n========================================`);
      console.log(`Auditing FAQPage in: ${rel} (${faqSchema.mainEntity.length} questions)`);
      console.log(`========================================`);
      
      for (const qa of faqSchema.mainEntity) {
        totalFaqChecks++;
        const question = qa.name || (qa.question ? qa.question.name : '');
        const answer = (qa.acceptedAnswer && qa.acceptedAnswer.text) || '';
        
        // Strip html tags from answer for text comparison
        const cleanAnswer = answer.replace(/<[^>]+>/g, '').trim();
        
        // Check if question exists in page content
        const questionFound = content.includes(question);
        
        // Check if a substantial part of the answer exists in page content (first 50 chars)
        const sampleAnswer = cleanAnswer.slice(0, 50);
        const answerFound = sampleAnswer.length > 0 && content.includes(sampleAnswer);
        
        if (!questionFound || !answerFound) {
          mismatchCount++;
          console.log(`  [MISMATCH] Q: "${question}"`);
          console.log(`    Question on page? ${questionFound}`);
          console.log(`    Answer snippet on page? ${answerFound}`);
          if (!answerFound) {
            console.log(`    Expected snippet: "${sampleAnswer}"`);
          }
        } else {
          console.log(`  [PASS] Q: "${question.slice(0, 60)}..."`);
        }
      }
    } catch (e) {
      console.error(`Error parsing schema in ${rel}:`, e.message);
    }
  }
}

console.log(`\n----------------------------------------`);
console.log(`FAQ Audit Complete: ${totalFaqChecks} questions checked across pages.`);
console.log(`Mismatches: ${mismatchCount}`);
