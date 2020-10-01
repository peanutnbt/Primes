//During the test the env variable is set to test
// process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../app');


chai.use(chaiHttp);
//Our parent block
describe('PRIMES', () => {
    /*
     * Test the /GET route
     */

    describe('GET /primes/sum/5', () => {
        it('it should GET sum is 5', (done) => {
            chai.request(server)
                .get('/primes/sum/5')
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
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
    });
});