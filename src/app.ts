import * as dotenv from "dotenv";
import * as express from "express";
import * as mongoose from "mongoose";
import companyRoute from "./routes/company";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const mongoUri = process.env.MONGO_URI;

app.listen(port, () => console.log(`Listening on port ${port}`));

mongoose.connect(mongoUri, { useNewUrlParser: true }, error =>
  console.log(error || "Successfully connected to Mongoose.")
);

app.use("/company", companyRoute);