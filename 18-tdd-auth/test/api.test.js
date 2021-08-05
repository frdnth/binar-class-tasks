const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const server = require("../index");
const { userModel } = require("../database");

// const { before, describe, it } = mocha;
const should = chai.should();

const mockuser = {
  username: "usernamebaruz",
  password: "passwordbaruz",
  name: "namebaruz",
  address: "addressbaruz",
  phone: "phonebaruz",
};

/*
 ! describe('string', callback function())
*/

describe("Login API", () => {
  it("Should login successfully.", (done) => {
    chai
      .request(server)
      .post("/login")
      .send({ username: "username1", password: "password1" })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("token");
        res.body.should.have.property("message").eql("Success.");
        done();
      });
  });

  it("Should not login if the username is not valid.", (done) => {
    chai
      .request(server)
      .post("/login")
      .send({ username: "usernamesalah", password: "password1" })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have
          .property("message")
          .eql("Make sure you insert the right username or password.");
        done();
      });
  });

  it("Should not login if the password is not valid.", (done) => {
    chai
      .request(server)
      .post("/login")
      .send({ username: "username1", password: "passwordsalah" })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have
          .property("message")
          .eql("Make sure you insert the right username or password.");
        done();
      });
  });
}),
  describe("Register API", () => {
    it("Should register successfully", (done) => {
      chai
        .request(server)
        .post("/register")
        .send(mockuser)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property("message")
            .eql("Successfully registered.");
          done();
        });
    });

    it("Should not register user because username is already exist", (done) => {
      chai
        .request(server)
        .post("/register")
        .send({
          username: "username1",
          password: "passwordbaru",
          name: "namebaru",
          address: "addressbaru",
          phone: "phonebaru",
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property("message")
            .eql("The username is already taken, please try another username.");
          done();
        });
    });
  }),
  describe("should delete one user", () => {
    it("Should delete one user", () => {
      userModel
        .destroy({
          where: { username: mockuser.username },
        })
        .then((res) => {
          should.equal(res, undefined);
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
    });
  });
