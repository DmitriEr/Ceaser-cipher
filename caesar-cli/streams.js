const fs = require('fs');
const path = require('path');

const readable = (value) => {
  if (value) {
    const input = path.join(__dirname, value);
    return fs.createReadStream(input);
  }
  console.log('Enter text:');
  return process.stdin;
}

const writable = (value) => {
  if (value) {
    const output = path.join(__dirname, value);
    return fs.createWriteStream(output, { 
      'flags': 'a',
      'encoding': null,
      'mode': 0666
    });
  }
  return process.stdout;
}

module.exports.readable = readable;
module.exports.writable = writable;