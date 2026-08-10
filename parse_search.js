const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('tab_1_genai_digital_solution___Google_Search.html', 'utf-8');
const $ = cheerio.load(html);
console.log("=== H3 Tags ===");
$('h3').each((i, el) => console.log($(el).text()));
console.log("\n=== Snippets ===");
$('.VwiC3b').each((i, el) => console.log($(el).text()));
