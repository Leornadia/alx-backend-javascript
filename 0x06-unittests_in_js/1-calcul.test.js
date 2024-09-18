const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should add two numbers correctly (SUM)', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should subtract two numbers correctly (SUBTRACT)', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should divide two numbers correctly (DIVIDE)', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return "Error" when dividing by zero (DIVIDE)', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should return "Unknown operation" for invalid type', () => {
    assert.strictEqual(calculateNumber('INVALID', 1.4, 4.5), 'Unknown operation');
  });
});
