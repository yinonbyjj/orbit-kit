// orbit-kit -- Express API server

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { itemsRouter } from "./routes/items";
import { errorHandler } from "./middleware/error";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api/items", itemsRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});