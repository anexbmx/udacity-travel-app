const request = require('supertest');
const app = require("../server/server");

describe("check the root path", () => {
    test("status code should be 200", () => {
      return request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  });





  
  
