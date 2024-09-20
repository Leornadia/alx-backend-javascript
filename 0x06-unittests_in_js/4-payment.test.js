const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(function () {
    // Stub Utils.calculateNumber to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the original methods
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with "SUM", 100, and 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub was called with correct arguments
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});

