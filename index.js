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

mongoose.connect("mongodb://127.0.0.1:27017/myapp")
  .then(() => console.log("connected....."))
  .catch((err) => console.log(err));

const app = express();
app.set("view engine", "hbs");
app.set("views", newpath);

hbs.registerPartials(newpartial_path);

app.use(express.static(paath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const createUser = require("./controller/userCtr");

// just checking...

// app.get("/", (req, res) => {
//   res.render("page-register");
// });

// app.post("/", createUser.createUser);

// app.post("/",function(req,res){
//   res.send(req.body);
// })

//? For User Routs
app.use('/',userRouter);



app.listen(8000, () => {
  console.log("done");
});
