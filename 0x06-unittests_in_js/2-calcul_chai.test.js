import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return the sum of two rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
    });

    it('should round both numbers before summing', () => {
      expect(calculateNumber('SUM', 1.6, 2.4)).to.equal(4);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return the difference of two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });

    it('should round both numbers before subtracting', () => {
      expect(calculateNumber('SUBTRACT', 1.6, 2.4)).to.equal(0);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return the quotient of two rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should round both numbers before dividing', () => {
      expect(calculateNumber('DIVIDE', 1.6, 2.4)).to.equal(1);
    });
  });

  describe('Invalid operation', () => {
    it('should throw an error for an invalid operation', () => {
      expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid operation');
    });
  });
});

