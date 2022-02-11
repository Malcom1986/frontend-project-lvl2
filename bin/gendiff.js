#!/usr/bin/env node
import { Command } from 'commander';
import genDiff, { getData } from '../src/genDiff.js';

const program = new Command();

program
  .version('0.1', '-v, --vers', 'output the current version')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type] ', 'output format')
  .arguments('<filepath1>  <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(genDiff(getData(filepath1), getData(filepath2)));
  });
program.parse();
