const request = require('request');
const { expect } = require('chai');

describe('/available_payments', () => {
  it('should return a 200 status code and correct payment methods', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.equal(200);
      const paymentMethods = JSON.parse(body);
      expect(paymentMethods.payment_methods.credit_cards).to.equal(true);
      expect(paymentMethods.payment_methods.paypal).to.equal(false);
      done();
    });
  });
});

describe('/login', () => {
  it('should return a 200 status code and "Welcome [username]" message', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: { userName: 'Betty' }
    };
    request(options, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

