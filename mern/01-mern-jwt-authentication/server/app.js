import express from "express"
import dotenv from "dotenv"
import CONNECT_DB from "./db/connect.js";
import authRouter from "./routes/auth.js";
import cors from "cors";
import helmet from "helmet";
import xss from "xss-clean"

// initialize app
const app = express();
// req.body will be empty without this
app.use(express.json());

// configure dotenv
dotenv.config({path: "./config/.env"});

// ready-to-go security middlewares
app.use(cors());
app.use(helmet())
app.use(xss())

// example get route
app.get("/", (req, res) => {
  res.send("mern app jwt auth");
});

// routes
app.use("/api/v1/auth", authRouter)

// read environment variables from .env
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// start listening on port after connected to db
const startServer = async () => {
  try {
    await CONNECT_DB(MONGO_URI);
    app.listen(PORT, () => {
      // console.log("Database connected");
      console.log(`server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();