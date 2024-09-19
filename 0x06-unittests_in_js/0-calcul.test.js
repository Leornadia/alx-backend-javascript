const calculateNumber = require('./0-calcul'); 
const assert = require('assert');

describe('calculateNumber', () => {
  it('should correctly add two numbers', () => {
    assert.equal(calculateNumber('add', 1.2, 2.4), 3);
  });

  it('should correctly subtract two numbers', () => {
    assert.equal(calculateNumber('subtract', 5.8, 2.1), 4);
  });

  it('should correctly divide two numbers', () => {
    assert.equal(calculateNumber('divide', 8.4, 2.5), 3);
  });

  it('should return "Error" when dividing by zero', () => {
    assert.equal(calculateNumber('divide', 5, 0), 'Error');
  });
});
