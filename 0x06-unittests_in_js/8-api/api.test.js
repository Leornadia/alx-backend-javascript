const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('should return a 200 status code', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done(error); // Propagate any errors to Mocha
    });
  });

  it('should return the correct message', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done(error); 
    });
  });
});
