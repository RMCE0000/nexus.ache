import express from "express";
import pino from "pino";
import { healthRouter } from "./routes/health.js";
import { env } from "./config/env.js";

const logger = pino({ level: env.LOG_LEVEL });

export const app = express();

app.use(express.json());
app.use((req, res, next) => {
  const startTime = Date.now();
  res.on("finish", () => {
    logger.info(
      {
        method: req.method,
        path: req.path,
        statusCode: res.statusCode,
        durationMs: Date.now() - startTime
      },
      "http request"
    );
  });
  next();
});

app.get("/", (_req, res) => {
  res.status(200).json({
    name: "nexus ACHE",
    mission: "A company holding everything."
  });
});

app.use("/health", healthRouter);
