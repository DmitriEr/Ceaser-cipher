const commander = require('commander');
const { pipeline } = require('stream');
const program = new commander.Command();



const fs = require('fs');
const path = require('path');

program
  .option('-a, --action_ <string>', 'an action encode/decode')
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <string>', 'an input file')
  .option('-o, --output <string>', 'an output file')
  .parse(process.argv);
  
try {
  const inputValue = program.input;
  const pathToInput = path.join(__dirname, inputValue);
  const outputValue = program.output;
  const pathToOutout = path.join(__dirname, outputValue);
  const shift = parseInt(program.shift, 10);
  const action = program.action_;
  fs.readFile(pathToInput, 'utf-8', (err, data) => {
    if(err) {
      throw err;
    }
    
    const editData = data.split('');

    const getCodePoint = (init, count, min, max, type) => {
      switch (type) {
        case 'encode': {
          let value = init + count;
          if (value > max) {
            return value = min + value % max;
          }
          return value;
        }
        case 'decode': {
          let value = init - count;
          if (value < min) {
            console.log(min % value)
            return value = max - min % value;
          }
          console.log(value)
          return value;
        }
        default:
          return null;
      }
    }

    editData.forEach((item, index, arr) => {
      const number = item.codePointAt();
      if (number >= 65 && number <= 90) {
        let upperCase = getCodePoint(number, shift, 65, 90, action);
        return arr[index] = String.fromCodePoint(upperCase);
      } else if (number >= 97 && number <= 122) {
        let lowerCase = getCodePoint(number, shift, 97, 122, action);
        return arr[index] = String.fromCodePoint(lowerCase);
      }
    });
    console.log(editData.join(''))

    fs.writeFile(pathToOutout, editData.join(''), (err, data) => {
      if (err) {
        throw err;
      }
      console.log('append')
    })

  })


  // console.log(fs.createReadStream(inputValue))
  // console.log(pathToInput)
  // pipeline(
    // fs.createReadStream(inputValue)
  // );
  // поле shift и action обязательно
  // if (program.shift === undefined || program.action_ === undefined) {
  //   throw new Error(`You need add ${program.shift === undefined ? 'shift' : 'action'}`)
  // } else {
  //   if (program.shift) console.log(program.shift);
  //   if (program.input) {
  //     const filePath = path.join(__dirname, program.input);
  //   };
  //   if (program.output) console.log(program.output);
  //   if (program.action_) {
  //     const value = program.action_;
  //     switch (value) {
  //       case 'encode':
  //         console.log('encode')
  //         return 'encode';
  //         break;
  //       case 'decode':
  //         console.log('decode')
  //         return 'decode';
  //         break;
  //       default:
  //         return null;
  //     }
  //   };
  // }




} catch(error) {
  console.log(error)
}




