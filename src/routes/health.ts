import { Router } from "express";

export const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.status(200).json({
    service: "nexus-ache",
    status: "ok",
    message: "nexus ACHE is holding everything.",
    timestamp: new Date().toISOString()
  });
});
