import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../src/app.js";

describe("nexus ACHE API", () => {
  it("serves mission statement", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: "nexus ACHE",
      mission: "A company holding everything."
    });
  });

  it("reports healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.service).toBe("nexus-ache");
    expect(typeof response.body.timestamp).toBe("string");
  });
});
