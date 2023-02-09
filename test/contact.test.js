// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../app');

// chai.use(chaiHttp);
// const expect = chai.expect;

// describe('Contact API', () => {
//     describe('GET :/message', () => {
//         it('should get all messages', (done) => {
//           chai.request(app)
//             .get('/message')
//             .end((err, res) => {
//               expect(res).to.have.status(200);
//               expect(res.body).to.be.a('array');
//               done();
//             });
//         });
//       });
    
//       describe('GET :/messageId', () => {
//         it('should get a single message by id', (done) => {
//           const id = 'some_unique_id';
//           chai.request(app)
//             .get(`/${id}`)
//             .end((err, res) => {
//               expect(res).to.have.status(200);
//               expect(res.body).to.be.a('object');
//               done();
//             });
//         });
//       });
    
//       describe('POST :/message', () => {
//         it('should create a new message', (done) => {
//           const blog = {
//             name: 'kun ben',
//             email: 'ben@gmail.com',
//             message: 'hey ben',
//           };
//           chai.request(app)
//             .post('/message')
//             .send(blog)
//             .end((err, res) => {
//               expect(res).to.have.status(201);
//               expect(res.body).to.be.a('object');
//               done();
//             });
//         });
//       });

//     });
