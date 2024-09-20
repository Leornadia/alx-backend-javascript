const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() 
{
    it('should call Utils.calculateNumber with SUM and correct arguments', function() 
    {
        // Create a spy on Utils.calculateNumber
        const spy = sinon.spy(Utils, 'calculateNumber');

        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Check if Utils.calculateNumber was called once
        expect(spy.calledOnce).to.be.true;

        // Check if it was called with the correct arguments
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;

        // Restore the original function
        spy.restore();
    });
});

