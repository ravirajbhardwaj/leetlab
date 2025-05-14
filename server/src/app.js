import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();

const corsOptions = {
  origin:
    process.env.CORS_ORIGIN === "*" ? "*" : process.env.CORS_ORIGIN?.split(","),
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "12kb" }));
app.use(express.urlencoded({ extended: true, limit: "12kb" }));
app.use(cookieParser());

const __dirname = path.resolve();
app.use(
  express.static(path.join(__dirname, "public"), {
    maxAge: 3600,
  }),
);

// import
import { ApiResponse } from "./utils/ApiResponse.js";

app.use("/", (_, res) => {
  res
    .status(200)
    .json(new ApiResponse(200, "Welcome to the Leetlab API", "Built with ❤️"));
});

export default app;
