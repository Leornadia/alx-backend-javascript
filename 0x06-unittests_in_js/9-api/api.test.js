const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  // ... (tests from the previous example)
});

describe('Cart page', () => {
  it('should return a 200 status code when :id is a number', (done) => {
    request('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done(error);
    });
  });

  it('should return a 404 status code when :id is not a number', (done) => {
    request('http://localhost:7865/cart/abc', (error, response, body) => {
      expect(response.statusCode).to.equal(404); 
      done(error);
    });
  });

  it('should return the correct message when :id is a number', (done) => {
    request('http://localhost:7865/cart/456', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 456');
      done(error);
    });
  });
});
