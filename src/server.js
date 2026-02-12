import express from "express";
import { config } from "dotenv";

//import routes
import movieRoutes from "./routes/movieRoutes.js";

config();

const app = express();

app.use("/movies", movieRoutes);

const PORT = 5001;

const server = app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
