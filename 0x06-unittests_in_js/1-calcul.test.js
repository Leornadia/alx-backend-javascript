const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() 
{
    describe('SUM', function() 
    {
        it('should return 6 when inputs are 1.4 and 4.5', function() 
        {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 0 when inputs are -1.4 and 1.4', function() 
        {
            assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
        });
    });

    describe('SUBTRACT', function() 
    {
        it('should return -4 when inputs are 1.4 and 4.5', function() 
        {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return -2 when inputs are 1.4 and 3.1', function() 
        {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.1), -2);
        });
    });

    describe('DIVIDE', function() 
    {
        it('should return 0.2 when inputs are 1.4 and 4.5', function() 
        {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return Error when the second number rounds to 0', function() 
        {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });

        it('should return 5.5 when inputs are 10.6 and 2.1', function() 
        {
            assert.strictEqual(calculateNumber('DIVIDE', 10.6, 2.1), 5.5);
        });
    });
});

