const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  it('correct status code?', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('correct result?', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});

describe('Cart page', () => {
  it('correct status code when :id is a number', (done) => {
    request(app)
      .get('/cart/12')
      .expect(200, done);
  });

  it('correct result when :id is a number', (done) => {
    request(app)
      .get('/cart/12')
      .end((err, res) => {
        expect(res.text).to.equal('Payment methods for cart 12');
        done();
      });
  });

  it('correct status code when :id is NOT a number', (done) => {
    request(app)
      .get('/cart/hello')
      .expect(404, done);
  });
});
