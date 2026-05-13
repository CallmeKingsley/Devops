const request = require("supertest");
const app = require("../src/server");

describe("App2 API Tests", () => {
  test("GET / should return welcome message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.app).toBe("app2");
  });

  test("GET /time should return timestamp", async () => {
    const response = await request(app).get("/time");

    expect(response.statusCode).toBe(200);
    expect(response.body.timestamp).toBeDefined();
  });

  test("GET /users/:id should return user id", async () => {
    const response = await request(app).get("/users/123");

    expect(response.statusCode).toBe(200);
    expect(response.body.userId).toBe("123");
  });
});