const fs = require('fs');
const path = require('path');

const dir = 'd:\\Downloads\\web1';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('carousel.js')) {
    content = content.replace('</body>', '<script src="carousel.js" defer></script>\n</body>');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Injected JS to ${file}`);
  }
}
