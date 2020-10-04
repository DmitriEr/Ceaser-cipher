const fs = require('fs');

const readable = (value) => {
  if (value) {
    return fs.createReadStream(value);
  }
  return process.stdin;
}

const writable = (value) => {
  if (value) {
    return fs.createWriteStream(value, { 
      'flags': 'a',
      'encoding': null,
      'mode': 0666
    });
  }
  return process.stdout;
}

module.exports.readable = readable;
module.exports.writable = writable;