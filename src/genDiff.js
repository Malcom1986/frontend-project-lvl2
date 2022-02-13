import _ from 'lodash';
import getData from './parsers.js';

const genDiff = (data1, data2) => {
  const d1 = getData(data1);
  const d2 = getData(data2);
  const unionD = _.union(_.keys(d1), _.keys(d2)).sort();
  const copy1 = _.clone(d1);
  const copy2 = _.clone(d2);
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
  const neww = JSON.stringify(newObj, null, 2);
  return neww.replace(/"/g, '').replace(/,/g, '');
};
console.log(genDiff('__fixtures__/file3.json', '__fixtures__/file4.json'));
export default genDiff;
