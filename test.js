const request = require("supertest")("http://localhost:8080");
const expect = require("chai").expect;

describe("GET /api/v1/stress/10/10", function () {
  it("returns 200 ok", async function () {
    const response = await request.get("/api/v1/stress/10/10");

    expect(response.status).to.eql(200);
  });
});