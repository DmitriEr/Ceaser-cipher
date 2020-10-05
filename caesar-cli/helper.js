const getCodePoint = (init, count, min, max, type) => {
  switch (type) {
    case 'encode': {
      let value = init + count;
      if (value > max) {
        return value = min + value % max - 1;
      }
      return value;
    }
    case 'decode': {
      let value = init - count;
      if (value < min) {
        return value = max - min % value + 1;
      }
      return value;
    }
    default:
      return null;
  }
}

module.exports.getCodePoint = getCodePoint;