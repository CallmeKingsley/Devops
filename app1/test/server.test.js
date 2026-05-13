const request = require("supertest");
const app = require("../src/server");

describe("App1 API Tests", () => {
  test("GET / should return welcome message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.app).toBe("app1");
  });

  test("GET /health should return UP", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("UP");
  });

  test("POST /echo should return request body", async () => {
    const payload = { name: "Kingsley" };

    const response = await request(app)
      .post("/echo")
      .send(payload);

    expect(response.statusCode).toBe(200);
    expect(response.body.youSent.name).toBe("Kingsley");
  });
});