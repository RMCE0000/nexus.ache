import express from "express";
import pinoHttp from "pino-http";
import pino from "pino";
import { healthRouter } from "./routes/health.js";
import { env } from "./config/env.js";

const logger = pino({ level: env.LOG_LEVEL });

export const app = express();

app.use(express.json());
app.use(pinoHttp({ logger }));

app.get("/", (_req, res) => {
  res.status(200).json({
    name: "nexus ACHE",
    mission: "A company holding everything."
  });
});

app.use("/health", healthRouter);
