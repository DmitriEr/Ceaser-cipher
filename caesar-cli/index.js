const commander = require('commander');
const program = new commander.Command();

const fs = require('fs');
const path = require('path');
const through = require('through2');

const { readable, writable } = require('./streams');
const { getCodePoint } = require('./helper');
// const { exit } = require('process');

program
  .option('-a, --action_ <string>', 'an action encode/decode')
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <string>', 'an input file')
  .option('-o, --output <string>', 'an output file')
  .parse(process.argv);

  const inputValue = program.input;
  const pathToInput = path.join(__dirname, inputValue);

  const outputValue = program.output;
  const pathToOutput = path.join(__dirname, outputValue);

  const shift = program.shift !== undefined ? parseInt(program.shift, 10) : program.shift;
  const action = program.action_;

  const read = readable(pathToInput);
  const write = writable(pathToOutput);
  console.log(isNaN(shift))
try {
  if (shift === undefined && action === undefined) {
    throw new Error('Shift and Action - required parameter')
  } else if (shift === undefined || action === undefined) {
    throw new Error(`${shift === undefined ? 'Shift' : 'Action'} - required parameter`)
  } else if (isNaN(shift)) {
    throw new Error('Shift - not a number')
  }

  read.pipe(through(function(chunk, _, callback) {
    const array = chunk.toString('utf-8').split('');

    array.forEach((item, index, arr) => {
      const number = item.codePointAt();
      if (number >= 65 && number <= 90) {
        let upperCase = getCodePoint(number, shift, 65, 90, action);
        return arr[index] = String.fromCodePoint(upperCase);
      } else if (number >= 97 && number <= 122) {
        let lowerCase = getCodePoint(number, shift, 97, 122, action);
        return arr[index] = String.fromCodePoint(lowerCase);
      }
    });
    // console.log(arr.join)

    this.push(`${array.join('')}\n`);
    callback()
   })).pipe(write)

} catch(error) {
  process.on('exit', () => {
    process.stderr.write(`${error}`)
  })
    // function exit(error) {
      // process
    // }
  // throw new Error(error);
}
