import express from 'express';
import router from "./routes/router";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({path: '.env'});

const app: express.Express = express();

app.use(cors({origin: true}));

app.use(express.json({limit: '7mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(express.static("static"));
app.use("/", router);

app.listen(process.env.PORT, function () {
  console.log(`backend at ${new Date} [app.ts]: server listening on port: ${process.env.PORT} and ${process.env.NODE_ENV}`
  );
});

export default app;
