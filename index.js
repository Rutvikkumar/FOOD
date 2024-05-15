const express = require("express");
const path = require("path");
const hbs = require("hbs");
const mongoose = require("mongoose");
const newpath = path.join(__dirname, "templates/views");
const newpartial_path = path.join(__dirname, "templates/partials");
const paath = path.join(__dirname, "public");
const userRouter = require("./routes/userRoutes");
const user = require("./config/dbConnect");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const PORT =process.env.PORT || 4000;

const app = express();
app.set("view engine", "hbs");
app.set("views", newpath);

hbs.registerPartials(newpartial_path);

app.use(express.static(paath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const createUser = require("./controller/userCtr");

//? For User Routs
app.use('/',userRouter);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});



app.listen(PORT, () => {
  console.log("done");
});
