const fs = require('fs');
const path = require('path');

const cssDir = path.join(__dirname, 'assets', 'css');
const cssFiles = [
  'reset.css',
  'variables.css',
  'global.css',
  'layout.css',
  'components.css',
  'animations.css',
  'pages.css',
  'responsive.css'
];

let combined = '/**\n * Foresight Associates — Unified Master Stylesheet\n * Bundled for High Performance & Zero-FOUC on Vercel / CDN\n */\n\n';

for (const f of cssFiles) {
  const filePath = path.join(cssDir, f);
  const content = fs.readFileSync(filePath, 'utf8');
  combined += `/* ==========================================================================\n   SECTION: ${f}\n   ========================================================================== */\n\n`;
  combined += content + '\n\n';
}

fs.writeFileSync(path.join(cssDir, 'style.css'), combined, 'utf8');
console.log('Successfully created assets/css/style.css, size:', combined.length, 'bytes');

