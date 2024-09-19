function calculateNumber(type, a, b) {
  if (type === 'add') {
    return Math.round(a) + Math.round(b);
  } else if (type === 'subtract') {
    return Math.round(a) - Math.round(b);
  } else if (type === 'divide') {
    if (Math.round(b) === 0) {
      return 'Error';
    }
    return Math.round(a) / Math.round(b);
  }
}

module.exports = calculateNumber; 
