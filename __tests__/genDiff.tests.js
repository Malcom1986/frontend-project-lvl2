import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('check diff JSON', () => {
  const file1Path = getFixturePath('file1.json');
  const file2Path = getFixturePath('file2.json');

  const actual = genDiff(file1Path, file2Path);
  const plain = readFile('expect.txt');
  expect(actual).toEqual(plain);
});

test('check diff YML', () => {
  const file1Path = getFixturePath('file3.yml');
  const file2Path = getFixturePath('file4.yml');

  const actual = genDiff(file1Path, file2Path);
  const plain = readFile('expect.txt');
  expect(actual).toEqual(plain);
});
