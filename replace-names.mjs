import fs from 'fs';
import path from 'path';

const map = {
  '/assets/card-a-aa.png': '/assets/Ka-Kha-Front a aa.png',
  '/assets/card-ka.png': '/assets/Ka-Kha-Front Ka.png',
  '/assets/card-kha.png': '/assets/Ka-Kha-Front Kha.png',
  '/assets/card-o-au.png': '/assets/Ka-Kha-Front o au.png',
  '/assets/card-fa-back.png': '/assets/Ka-Kha-Back Fa.png',
  '/assets/card-yo-back.png': '/assets/Ka-Kha-Back Ya.png'
};

const dir = 'components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

for (const f of files) {
  let content = fs.readFileSync(path.join(dir, f), 'utf-8');
  for (const [oldName, newName] of Object.entries(map)) {
    // using split join to replace all
    content = content.split(oldName).join(newName);
  }
  fs.writeFileSync(path.join(dir, f), content);
}
console.log('Replaced asset names.');
