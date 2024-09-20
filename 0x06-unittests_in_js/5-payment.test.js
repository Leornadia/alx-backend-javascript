const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Create a spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy after each test
    consoleSpy.restore();
  });

  it('should log "The total is: 120" for inputs 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" for inputs 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
  });
});
