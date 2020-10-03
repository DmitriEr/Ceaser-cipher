// const { program } = require('commander');
const commander = require('commander')
const program = new commander.Command();

// program
//   .option('-s, --shift', 'a shift')
//   .option('-i, --input', 'an input file')
//   .option('-o, --output', 'an output file')
//   .option('-a, --action', 'an action encode/decode');

// program.parse(process.argv);

// if (program.shift) console.log(program.opts())
// console.log('shift')
// if (program.input) console.log('input')
// if (program.output) console.log('output')
// if (program.action) console.log('action')


program
  .option('-s, --shift<number>', 'a shift')
  .option('-i, --input<string>', 'an input file')
  .option('-o, --output<string>', 'an output file')
  .option('-a, --action<string>', 'an action encode/decode');

program.parse(process.argv);

if (program.shift) console.log('shift');
if (program.input) console.log('input');
if (program.output) console.log('output');
if (program.action) console.log('action');

