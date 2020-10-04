const { getCodePoint } = require('./helper');

function cipher (shiftValue, actionValue) {
  return function (chunk, _, callback) {
    const array = chunk.toString('utf-8').split('');
  
    array.forEach((item, index, arr) => {
      const number = item.codePointAt();
      if (number >= 65 && number <= 90) {
        let upperCase = getCodePoint(number, shiftValue, 65, 90, actionValue);
        return arr[index] = String.fromCodePoint(upperCase);
      } else if (number >= 97 && number <= 122) {
        let lowerCase = getCodePoint(number, shiftValue, 97, 122, actionValue);
        return arr[index] = String.fromCodePoint(lowerCase);
      }
    });
  
    this.push(`${array.join('')}`);
    callback()
   }
}

module.exports.cipher = cipher;