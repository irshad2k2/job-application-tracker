const { application } = require("express");
const db = require("../models");
const express = require("express");
const request = require("supertest");
const app = require("../app");

let server, agent;

describe("signUp test suite", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    server = app.listen(3000, () => {});
    agent = request.agent(server);
  });

  afterAll(async () => {
    await db.sequelize.close();
    server.close();
  });

  test("Should add user", async () => {
    const response = await agent.post("/signup").send({
      firstName: "john",
      lastName: "doe",
      email: "example2@gmail.com",
      password: "12345678",
    });

    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toBe(
      "application/json; charset=utf-8",
    );
    const parsedResponse = JSON.parse(response.text);
    expect(parsedResponse.id).toBeDefined();
  });
});
