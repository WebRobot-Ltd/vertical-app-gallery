import { readFileSync } from 'node:fs';
import { validateManifest } from '@webrobot/vertical-kit/contract';
const errs = validateManifest(JSON.parse(readFileSync(process.argv[2], 'utf8')));
console.log(JSON.stringify(errs));
