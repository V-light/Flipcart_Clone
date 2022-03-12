import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

//components
import defaultData from "./default.js";
import Routes from "./routes/routes.js";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.get("/", (req, res) => {

//   console.log("Hello world");
//   return res.json("Hello");
// });
app.use('/' , Routes);

app.listen(8000, () => {
  console.log(`server has started with port: 8000`);
});



//Database Connection

//data to databaase
// defaultData();
