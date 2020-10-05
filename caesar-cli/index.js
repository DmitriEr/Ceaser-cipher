const commander = require('commander');
const program = new commander.Command();
const through = require('through2');
const path = require('path');
const fs = require('fs');

const { readable, writable } = require('./streams');
const { cipher } = require('./cipher');

program
  .option('-a, --action_ <string>', 'an action encode/decode')
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <string>', 'an input file')
  .option('-o, --output <string>', 'an output file')
  .parse(process.argv);

  const inputValue = program.input;

  const outputValue = program.output;

  const shift = program.shift !== undefined ? parseInt(program.shift, 10) : program.shift;
  const action = program.action_;

  const currentInput = fs.existsSync(path.join(__dirname, inputValue));

  function test (text) {
    const start = text.length - 4;
    const expansion = text.substr(start, 4);
    if (expansion !== '.txt') {
      return true
    }
    return false;
  }

  test(inputValue)

  try {
    if (shift === undefined && action === undefined) {
      throw new Error('Shift and Action - required parameter')
    } else if (shift === undefined || action === undefined) {
      throw new Error(`${shift === undefined ? 'Shift' : 'Action'} - required parameter`)
    } else if (isNaN(shift)) {
      throw new Error('Shift - not a number')
    } else if (!currentInput) {
      throw new Error('The given file input does not exist')
    }
    
    const read = readable(inputValue);
    const write = writable(outputValue);

  read.pipe(through(cipher(shift, action))).pipe(write)

} catch(error) {
  process.on('exit', () => {
    process.stderr.write(`${error}`)
  })
}
