import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const getPath = (pathStr) => path.resolve(process.cwd(), pathStr);

export const getData = (pathStr) => {
  const data = fs.readFileSync(getPath(pathStr), 'utf-8');
  return JSON.parse(data);
};

export const genDiff = (data1, data2) => {
  const unionD = _.union(_.keys(data1), _.keys(data2)).sort();

  const copy1 = _.clone(data1);
  const copy2 = _.clone(data2);

  const newObj = unionD.reduce((acc, item) => {
    if (copy1[item] === copy2[item]) {
      acc[`  ${item}`] = copy1[item];
    }
    if (_.has(copy1, item) && !_.has(copy2, item)) {
      acc[`- ${item}`] = copy1[item];
    }
    if (copy1[item] !== copy2[item] && _.has(copy2, item) && _.has(copy1, item)) {
      acc[`- ${item}`] = copy1[item];
    }
    if (_.has(copy2, item) && copy2[item] !== copy1[item]) {
      acc[`+ ${item}`] = copy2[item];
    }
    return acc;
  }, {});
  const neww = JSON.stringify(newObj);
  return neww.replace(/"/g, '').replace(/,/g, '');
};

export default genDiff;
