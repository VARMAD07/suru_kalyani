import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
const scripts=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)];
for(const [,code] of scripts)new vm.Script(code);
for(const property of ['og:title','og:type','og:url','og:image','og:image:alt'])assert.equal([...html.matchAll(new RegExp('property="'+property+'"','g'))].length,1,property);
assert(html.includes('name="twitter:card" content="summary_large_image"'));
assert(html.includes('https://varmad07.github.io/suru_kalyani/assets/share-banner.png'));
const png=fs.readFileSync(new URL('../assets/share-banner.png',import.meta.url));
assert.equal(png.toString('hex',0,8),'89504e470d0a1a0a');
assert(html.includes('property="og:image:width" content="'+png.readUInt32BE(16)+'"'));
assert(html.includes('property="og:image:height" content="'+png.readUInt32BE(20)+'"'));
const staticHtml=html.split('<script>')[0];
const ids=[...staticHtml.matchAll(/\bid="([^"$]+)"/g)].map(x=>x[1]);
assert.equal(new Set(ids).size,ids.length,'Duplicate static IDs');
assert(!html.includes('QA note:'));
console.log('PASS: JavaScript syntax, unique IDs, sharing metadata and banner dimensions.');

