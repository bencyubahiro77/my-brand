// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../app');

// chai.use(chaiHttp);
// const expect = chai.expect;

// describe('Blog API', () => {
//   describe('GET /', () => {
//     it('should get all blogs', (done) => {
//       chai.request(app)
//         .get('/')
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           expect(res.body).to.be.a('array');
//           done();
//         });
//     });
//   });

//   describe('GET /:id', () => {
//     it('should get a single blog by id', (done) => {
//       const id = 'some_unique_id';
//       chai.request(app)
//         .get(`/${id}`)
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           expect(res.body).to.be.a('object');
//           done();
//         });
//     });
//   });

//   describe('POST /', () => {
//     it('should create a new blog', (done) => {
//       const blog = {
//         title: 'Test Blog',
//         author: 'Test Author',
//         body: 'This is a test blog',
//       };
//       chai.request(app)
//         .post('/')
//         .send(blog)
//         .end((err, res) => {
//           expect(res).to.have.status(201);
//           expect(res.body).to.be.a('object');
//           done();
//         });
//     });
//   });

//   describe('PUT/:id', () => {
//     it('should update a blog by id', (done) => {
//       const id = 'some_unique_id';
//       const updates = {
//         title: 'Updated Test Blog',
//       };
//       chai.request(app)
//         .put(`/${id}`)
//         .send(updates)
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           expect(res.body).to.be.a('object');
//           done();
//         });
//     });
//   });

//   describe('DELETE /:id', () => {
//     it('should delete a blog by id', (done) => {
//         const id = 'some_unique_id';
//         chai.request(app)
//         .delete(`/${id}`)
//         .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.be.a('object');
//         expect(res.body).to.have.property('message').equal('Blog successfully deleted');
//         done();
//         });
//         });
//         });
//         });

 