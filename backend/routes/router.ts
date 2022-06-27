import express from "express";

import mapRouter from "./mapRouter";

const router: express.Router = express.Router();

router.use("/get-weather", mapRouter);
// https://api.openweathermap.org/data/2.5/weather?q=lviv&units=imperial&appid=


export default router;