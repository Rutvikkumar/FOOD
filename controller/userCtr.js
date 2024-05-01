const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

//? for secure Password function
const securePassword = async (password) => {
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    return passwordHash;
  } catch (error) {
    console.log(error.message);
  }
};

//? for email verification function

const sendVerifyMail = async (name, email, user_id) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "rutvikparmar00021@gmail.com",
        pass: "aezrjnwmbsbrdzbr",
      },
    });

    let mailOptions = {
      from: "rutvikparmar00021@gmail.com", // Sender's email address
      to: email, // Receiver's email address
      subject: "Hello from Node.js", // Subject of the email
      text: "This is a test email sent from Node.js.", // Plain text body of the email
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

const Register = async (req, res) => {
  try {
    res.render("page-register");
  } catch (error) {
    console.log(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const apassword = await securePassword(req.body.password);
    const newUser = new User({
      userName: req.body.username,
      email: req.body.email,
      mobile: req.body.mobile,
      password: apassword,
    });

    const result = await newUser.save();
    res.status(201).send("Registration has been successful. " + result);
    if (result) {
      sendVerifyMail(req.body.username, req.body.email, userData._id);
      res.render("page-register", {
        message:
          "Your registration has been successfuly,Plase cheak  your Email",
      });
    } else {
      res.render("page-register", {
        message: "Your registration has been Faild",
      });
    }
  } catch (error) {
    // res.send(error.massage);
    res.status(500).send(error.message);
  }
};

const verifyMail = async (req, res) => {
  try {
    const updateInfo = await User.updateOne(
      { _id: req.query.id },
      { $set: { is_varified: 1 } }
    );

    console.log(updateInfo);
    res.send("Your email is verifeid");
  } catch (error) {
    console.log(error);
  }
};

