// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../app');

// chai.use(chaiHttp);
// const expect = chai.expect;

// describe('Comment API', () => {
//     describe('GET /', () => {
//         it('should get all comment', (done) => {
//           chai.request(app)
//             .get('/')
//             .end((err, res) => {
//               expect(res).to.have.status(200);
//               expect(res.body).to.be.a('array');
//               done();
//             });
//         });
//       });
    
    
//       describe('POST /', () => {
//         it('should create a new comment', (done) => {
//           const blog = {
//             author: 'kun ben',
//             message: 'good blog forsure',
//           };
//           chai.request(app)
//             .post('/')
//             .send(blog)
//             .end((err, res) => {
//               expect(res).to.have.status(201);
//               expect(res.body).to.be.a('object');
//               done();
//             });
//         });
//       });

//     });
