import { strict as assert } from 'assert';
import { calculateNumber } from './0-calcul.js';

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers', () => {
    assert.equal(calculateNumber(-1, -3), -4);
    assert.equal(calculateNumber(-1.2, -3.7), -5);
  });

  it('should round to nearest integer', () => {
    assert.equal(calculateNumber(1.4, 3.4), 4);
    assert.equal(calculateNumber(1.6, 3.6), 6);
  });
});

