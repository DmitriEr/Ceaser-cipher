const commander = require('commander')
const program = new commander.Command();

program
  .option('-a, --action_ <string>', 'an action encode/decode')
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <string>', 'an input file')
  .option('-o, --output <string>', 'an output file')
  .parse(process.argv);
  
try {
  if (program.shift) console.log(program.shift);
  if (program.input) console.log(program.input);
  if (program.output) console.log(program.output);
  if (program.action) console.log(program.action_);
} catch(error) {
  console.log(error)
}




