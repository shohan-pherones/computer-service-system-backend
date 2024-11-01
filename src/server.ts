import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./config/db";
import router from "./routes";

class Server {
  private app: express.Application;
  private PORT: number | string;

  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 4000;
    this.connectDatabase();
    this.configureMiddleware();
    this.initializeRoutes();
    this.handleErrors();
  }

  private connectDatabase() {
    connectDB();
  }

  private configureMiddleware() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan("combined"));
  }

  private initializeRoutes() {
    this.app.use("/api/v1", router);
    this.app.get("/api/v1/test", (req: Request, res: Response) => {
      res.send("Welcome to the Computer Service System API");
    });
    this.app.use((req: Request, res: Response) => {
      res.status(404).json({ message: "Route not found" });
    });
  }

  private handleErrors() {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        res.status(500).json({ message: "Internal Server Error" });
      }
    );

    process.on("unhandledRejection", (reason: any, promise: Promise<any>) => {
      console.error("Unhandled Rejection at:", promise, "reason:", reason);
    });

    process.on("uncaughtException", (error: Error) => {
      console.error("Uncaught Exception:", error.message);
    });
  }

  public start() {
    this.app.listen(this.PORT, () => {
      console.log(`Server is running on http://localhost:${this.PORT}`);
    });
  }
}

const server = new Server();
server.start();
