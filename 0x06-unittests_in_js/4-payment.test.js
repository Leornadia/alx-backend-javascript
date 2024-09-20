const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and verify console.log', () => {
    // Create a stub for Utils.calculateNumber
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Create a spy for console.log
    const consoleLogSpy = sinon.spy(console, 'log');
    
    // Call the function
    sendPaymentRequestToApi(100, 20);
    
    // Verify that the stub is being called with the correct arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    
    // Verify that console.log is logging the correct message
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    
    // Restore the stub and spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
