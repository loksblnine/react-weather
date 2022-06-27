import express from "express";
import * as mapController from "../controllers/mapController";

const mapRouter = express.Router();

mapRouter
  .route('/')
  .post(mapController.getWeather);

export default mapRouter;
