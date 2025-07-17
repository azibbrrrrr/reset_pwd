// replace-env.js
const fs = require('fs');
const path = require('path');

const CONFIG_FILE = path.join(__dirname, 'config.js');
const BASE_URL = process.env.BASE_URL;

if (!BASE_URL) {
    console.error('❌ BASE_URL env variable not set.');
    process.exit(1);
}

let content = fs.readFileSync(CONFIG_FILE, 'utf-8');
content = content.replace('__BASE_URL__', BASE_URL);
fs.writeFileSync(CONFIG_FILE, content, 'utf-8');

console.log(`✅ Replaced __BASE_URL__ with ${BASE_URL}`);
