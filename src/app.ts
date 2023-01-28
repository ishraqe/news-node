import express, {
  Request,
  Response,
  Application,
  NextFunction,
  ErrorRequestHandler
} from "express";
import { Server } from "http";
import createHttpError from "http-errors";
import dotenv from "dotenv";
import routes from "./routes/routes";
import cors from "cors";

dotenv.config();

const app: Application = express();
app.use(
  cors({
    origin: "*"
  })
);
app.use(routes);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || 500);
  res.send({ status: err.status || 500, messge: err.messge });
};

app.use(errorHandler);

const port: number = Number(process.env.PORT) || 8080;

const server: Server = app.listen(port, () => {
  console.log("Server is on port " + port);
});
