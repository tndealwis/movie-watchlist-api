import express from "express";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db.js";

//import routes
import movieRoutes from "./routes/movieRoutes.js";

config();
connectDB();

const app = express();

app.use("/movies", movieRoutes);

const PORT = 5001;

const server = app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

//handle database connection exceptions

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection: ", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception: ", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

process.on("SIGTERM", (err) => {
  console.error("SIGTERM recieved, shutting down.");
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});
