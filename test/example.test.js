let server = require('../index');
let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.use(chaiHttp);

describe("Realizar un llamado de tipo GET a exampleAPI: ", () => {
  it("Retornar un objeto de tipo {'msg':'string'}", (done) => {
    chai.request(server)
      .get("/exampleAPI")
      .end(function (err, res) {
        if(err) console.log(err)
        console.log(res.body)
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('msg').eql('Response from exampleFunction in exampleController');       
        expect(res).to.have.status(200);
        done();
      });
  });
});
