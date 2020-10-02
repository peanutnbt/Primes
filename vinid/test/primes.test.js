//During the test the env variable is set to test
// process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../app');

var Cookies;
chai.use(chaiHttp);
//Our parent block
before(function () {
    chai.request(server)
        .get('/set_session')
        .end((err, res) => {
            Cookies = res.headers['set-cookie'].pop().split(';')[0];
        });
});
describe('PRIMES', () => {
    describe('GET /primes/sum/5', () => {
        it('it should GET sum is 5', (done) => {
            chai.request(server)
                .get('/primes/sum/5')
                .set('Cookie', Cookies)
                .set('User', {website: 'anonystick.com', type: 'blog javascript', like: '4550'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.sum.should.be.eql(5);
                    done();
                });
        });
    });
    describe('GET /primes/sum/10', () => {
        it('it should GET sum is 17', (done) => {
            chai.request(server)
                .get('/primes/sum/10')
                .set('Cookie', Cookies)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.sum.should.be.eql(17);
                    done();
                });
        });
    });
    describe('GET /primes/sum/3000000', () => {
        it('it should GET sum is 312471072265', (done) => {
            chai.request(server)
                .get('/primes/sum/3000000')
                .set('Cookie', Cookies)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.sum.should.be.eql(312471072265);
                    done();
                });
        });
    });
    describe('GET /primes/sum/-1', () => {
        it('it should GET error message', (done) => {
            chai.request(server)
                .get('/primes/sum/-1')
                .set('Cookie', Cookies)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
    });
});

// var request = require('supertest'),
//   should = require('should'),
//   app = require('../app');
 
// var Cookies;
 
// describe('Functional Test <Sessions>:', function () {
//   it('should create user session for valid user', function (done) {
//     request(app)
//       .get('/set_session')
//       .set('Accept','application/json')
//       .expect(200)
//       .end(function (err, res) {
//         console.log('----------------------------------------------')
//         console.log('---res.headers---', res.headers)
//         console.log('----------------------------------------------')
//         // Save the cookie to use it later to retrieve the session
//         Cookies = res.headers['set-cookie'].pop().split(';')[0];
//         done();
//       });
//   });
//   it('should get user session for current user', function (done) {
//     var req = request(app).get('/get_session');
//     // Set cookie to get saved user session
//     req.cookies = Cookies;
//     req.set('Accept','application/json')
//       .expect(200)
//       .end(function (err, res) {
//         console.log('----------------------------------------------')
//         console.log('---res.body---', res.body)
//         console.log('----------------------------------------------')
//         done();
//       });
//   });
// });