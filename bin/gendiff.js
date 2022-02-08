#!/usr/bin/env node

import { Command } from "commander";
const program = new Command();

program
  .version('0.1')
  .description('Compares two configuration files and shows a difference.')

program.command('genDiff')  
  .option('-V', '--version', 'output the version number')
  .option('-h', '--help', 'output usage information');

program.parse();