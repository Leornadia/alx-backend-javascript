const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const app = require('./api');

chai.use(chaiHttp);

describe('API', () => {
  describe('GET /', () => {
    it('should return 200 OK', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('API available');
          done();
        });
    });
  });

  describe('GET /cart/:id', () => {
    it('should return 200 OK with valid cart ID', (done) => {
      chai.request(app)
        .get('/cart/12')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Payment methods for cart 12');
          done();
        });
    });

    it('should return 404 Not Found with invalid cart ID', (done) => {
      chai.request(app)
        .get('/cart/hello')
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.text).to.equal('Invalid cart ID');
          done();
        });
    });
  });
});
