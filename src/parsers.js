import yaml from 'js-yaml';
import { readFileSync } from 'fs';
import path from 'path';

const getPath = (pathStr) => path.resolve(process.cwd(), pathStr);

const getData = (pathStr) => {
  const format = path.extname(getPath(pathStr));
  const data = readFileSync(getPath(pathStr), 'utf-8');
  if (format === '.yml' || format === '.yaml') {
    return yaml.load(data);
  }
  return JSON.parse(data);
};

export default getData;
