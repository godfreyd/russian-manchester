const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, '..', 'build', 'hypercube.json');
const i18nContent = fs.readFileSync(i18nPath, 'utf-8');
const i18n = JSON.parse(i18nContent);
const langs = Object.keys(i18n);

for (const lang of langs) {
    const fileContent = JSON.stringify(i18n[lang]);
    const filePath = path.join(__dirname, '..', 'build', `i18n.${lang}.json`);

    fs.writeFileSync(filePath, fileContent, 'utf-8');
}
