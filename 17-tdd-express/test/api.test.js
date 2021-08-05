const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');


chai.use(chaiHttp);
const server = require('../index');

// const { before, describe, it } = mocha;
const should = chai.should();

// ! describe('string', callback funvtion())

const user = {
    start_lat: 20,
    start_long: 20,
    end_lat: 30,
    end_long: 30,
    rider_name: 'bambang',
    driver_name: 'irwin',
    dirver_vehicle: 'expander',
}


describe('API test', () => {
    describe('get one user', () => {
        it('should return user object', (done) => {
            chai
             .request(server)
             .get('/')
             .end((err, res)=> {
                res.should.have.status(200)
                res.body.should.have.property('status').eql(200);
                res.body.data[0].should.have
                    .property('start_lat')
                    .eql(user.start_lat);
                res.body.data[0].should.have
                    .property('start_long')
                    .eql(user.start_long);
                res.body.data[0].should.have
                    .property('end_lat')
                    .eql(user.end_lat);
                res.body.data[0].should.have
                    .property('end _long')
                    .eql(user.end_long);
                res.body.data[0].should.have
                    .property('rider_name')
                    .eql(user.rider_name);
                res.body.data[0].should.have
                    .property('driver_name')
                    .eql(user.driver_name);
                res.body.data[0].should.have
                    .property('driver_vehicle')
                    .eql(user.dirver_vehicle);


                 done()
             });
        });
    }),

    describe('create one user', () => {
    it('should create new user', (done)=> {
        chai
            .request(server)
            .post('/')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('status').eql(200);
                res.body.data.should.have
                    .property('start_lat')
                    .eql(user.start_lat);
                res.body.data.should.have
                    .property('start_long')
                    .eql(user.start_long);
                res.body.data.should.have
                    .property('end_lat')
                    .eql(user.end_lat);
                res.body.data.should.have
                    .property('end_long')
                    .eql(end_long);
                res.body.data.should.have
                    .property('rider_name')
                    .eql(user.rider_name);
                res.body.data.should.have
                    .property('driver_name')
                    .eql(user.driver_name);
                res.body.data.should.have   
                    .property('dirver_vehicle')
                    .eql(user.dirver_vehicle);

                done();
            });
        });
    }),
    describe('put one user', ()=> {}),
    describe('delete one user', ()=> {});
});


