const request = require('request');
const { expect } = require('chai');

// ... (previous tests) ... 

describe('/available_payments', () => {
  it('should return a 200 status code and correct payment methods', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done(error); 
    });
  });
});

describe('/login', () => {
  it('should return a 200 status code and "Welcome [username]" message', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: { userName: 'TestUser' },
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome TestUser');
      done(error);
    });
  });
});
