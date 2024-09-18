import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', () => {
  it('should add two numbers correctly (SUM)', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should subtract two numbers correctly (SUBTRACT)', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should divide two numbers correctly (DIVIDE)', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return "Error" when dividing by zero (DIVIDE)', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should return "Unknown operation" for invalid type', () => {
    expect(calculateNumber('INVALID', 1.4, 4.5)).to.equal('Unknown operation');
  });
});
