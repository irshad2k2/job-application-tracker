require("dotenv").config();
const { application } = require("express");
const db = require("../models");
const express = require("express");
const request = require("supertest");
const app = require("../app");

let server, agent, token, jobID;

describe("API test suite", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    server = app.listen(3000, () => {});
    agent = request.agent(server);
  });

  afterAll(async () => {
    await db.sequelize.close();
    server.close();
  });

  test("Should signup user", async () => {
    const response = await agent.post("/api/auth/signup").send({
      firstName: "john",
      lastName: "doe",
      email: "example@gmail.com",
      password: "12345678",
    });

    expect(response.statusCode).toBe(201);
    expect(response.headers["content-type"]).toBe(
      "application/json; charset=utf-8",
    );
    const parsedResponse = JSON.parse(response.text);
    expect(parsedResponse.user.id).toBeDefined();
  });

  test("Shoul login user", async () => {
    const response = await agent.post("/api/auth/login").send({
      email: "example@gmail.com",
      password: "12345678",
    });

    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toBe(
      "application/json; charset=utf-8",
    );
    const parsedResponse = JSON.parse(response.text);
    expect(parsedResponse.token).toBeDefined();

    token = parsedResponse.token;
  });

  test("Should add JobApplication", async () => {
    const res = await agent
      .post("/api/job")
      .set("Authorization", `Bearer ${token}`)
      .send({
        company: "example",
        role: "example",
        description: "example",
        ctc: 125.0,
        location: "example",
        status: "APPLIED",
        appliedDate: "2025-01-02",
        notes: "nothing",
      });
    expect(res.statusCode).toBe(201);
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
    const parsedResponse = JSON.parse(res.text);
    jobID = parsedResponse.id;
    expect(parsedResponse.id).toBeDefined();
  });

  test("Should count job stats", async () => {
    const res = await agent
      .get("/api/job/stats")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
    const parsedResponse = JSON.parse(res.text);
    expect(parsedResponse.APPLIED).toBeDefined();
    expect(parsedResponse.INTERVIEW).toBeDefined();
    expect(parsedResponse.OFFER).toBeDefined();
    expect(parsedResponse.REJECTED).toBeDefined();
  });

  test("Shoul get all jobs", async () => {
    const res = await agent
      .get("/api/job")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
    const parsedResponse = JSON.parse(res.text);
    expect(parsedResponse[0].id).toBeDefined();
  });

  test("Should get job by id", async () => {
    const res = await agent
      .get(`/api/job/${jobID}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
    const parsedResponse = JSON.parse(res.text);
    expect(parsedResponse.id).toBeDefined();
  });

  test("Should delete job", async () => {
    const res = await agent
      .delete(`/api/job/${jobID}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.body.message).toBe("Job deleted successfully");
  });
});
