const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

const server = require("../src/index")
const { users: UserModel } = require('../models');

chai.use(chaiHttp);
const should = chai.should();

const dummyUser = {
    username: "Foe",
    password: "password",
    name: "Damar",
    phone: "081234567890",
    email: "damar@damar.mail.com",
    profile_pic: "foto"
};

describe("Create user", ()=> {
    it("should register one user", (done) => {
        chai
            .request(server)
            .post("/auth/register")
            .send(dummyUser)
            .end((err,res) => {
                res.should.have.status(200)
                res.body.should.have
                    .property("status")
                    .eql(200);
                res.body.should.have
                    .property("message")
                    .eql("User is succesfully created");
                res.body.should.have
                    .property("data");

                res.body.should.have
                    .property("username")
                    .eql(dummyUser.username);
                res.body.should.have
                    .property("name")
                    .eql(dummyUser.name);
                res.body.should.have
                    .property("phone")
                    .eql(dummyUser.phone);
                res.body.should.have
                    .property("email")
                    .eql(dummyUser.email);

                done();
            });
    });
});

describe("Create user", () => {
    it("should be failed because username is already exist", (done) => {
        chai
            .request(server)
            .post("/auth/register")
            .send(dummyUser)
            .end((err,res)=> {
                res.should.have.status(400);
                res.body.should.have
                    .property("status")
                    .eql(400);
                res.body.should.have
                    .property("message")
                    .eql("Username is already exist.");
                res.body.should.have
                    .property("data")
                    .eql(null);

                done();
            })
    })
})


describe("User login", () => {
    it("Shoul login the user", (done) => {
        chai
            .request(server)
            .post("/auth/login")
            .send(dummyUser)
            .end((err,res)=> {
                res.should.have.status(200);
                res.body.should.have
                    .property("status")
                    .eql(200);
                res.body.should.have
                    .property("message")
                    .eql("");
                res.body.should.have
                    .property("data")
                    .eql(null);

                done();
            })
    })
})