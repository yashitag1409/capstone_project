const express = require("express");
const app = express();
const cors = require("cors");
const port = 4164 || PROCESS.env.PORT;
const axios = require("axios");
const mongoose = require("mongoose");
const REGISTER_SCHEMA = require("./Register_Schema");
const CUSTOMER_SCHEMA = require("./CustomerSchema");
const ORDER_SCHEMA = require("./Order_Schema");
const MENU_SCHEMA = require("./MenuSchema");
const password = "Naman1409";
const dbUrl = `mongodb+srv://Yashit1409:${password}@cluster0.9d4zjkb.mongodb.net/foodweb`;

app.use(cors());
app.use(express.json());

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log(err));

mongoose.set("strictQuery", false);
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port : " + port);
  }
});

// ADDING RESTAURANT

app.post("/registerRestaurant", async (req, resp) => {
  const email = req.body.email;
  // console.log(email);
  var res_exist = await REGISTER_SCHEMA.findOne({ email: email });
  // console.log(user_exist);
  if (res_exist.email === email) {
    resp.status(200).send({ msg: "Restaurant already Exist" });
  } else {
    var newRest = {
      owner_name: req.body.ownerName,
      res_name: req.body.resName,
      res_type: req.body.resType,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      closing_time: req.body.closingTime,
      open_time: req.body.openTime,
      phone_no: req.body.phoneNo,
    };
    const restaurant = new REGISTER_SCHEMA(newRest);
    const result = await restaurant.save();
    // console.log(result._id);
    resp.status(200).send(result);
  }
  // console.log(user_exist.email);
});

// LOGIN RESTAURANT
app.post("/loginRestaurant", async (req, resp) => {
  const email = req.body.email;
  var res_exist = await REGISTER_SCHEMA.findOne({ email: email });
  if (res_exist) {
    if (res_exist.password === req.body.password) {
      resp
        .status(200)
        .send({ msg: `welcome Back ${res_exist.res_name}`, data: res_exist });
    } else {
      resp.status(400).send({ msg: "Invalid Password" });
    }
  } else {
    resp.status(400).send({ msg: "Invalid Email" });
  }
});

// REGISTERING CUSTOMER

app.post("/registerCustomer", async (req, resp) => {
  const email = req.body.email;
  var user_exist = await CUSTOMER_SCHEMA.findOne({ email: email });

  if (user_exist) {
    resp.status(400).send({ msg: "Customer Already Exist" });
  } else {
    var newUser = {
      user_name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      phone_no: req.body.phoneNo,
    };

    const user = new CUSTOMER_SCHEMA(newUser);

    // bcrypt password
    user.password = user.generateHash(req.body.password);

    const result = await user.save();
    resp.status(200).send(result);
  }
});

// LOGIN CUSTOMER

app.post("/loginCustomer", async (req, resp) => {
  var msg = "";
  const email = req.body.email;
  var user_exist = await CUSTOMER_SCHEMA.findOne(
    { email: email },
    async (err, user) => {
      if (!user.validPassword(req.body.password)) {
        msg = "Check Your Password And try Again";
      } else {
        msg = `Belcome Back ${user_exist.user_name}`;
        var pastOrders = await ORDER_SCHEMA.find({ email: email });
        resp.status(200).send({
          msg: msg,
          pastOrder: pastOrders,
          userData: user_exist,
        });
      }
    }
  );
  if (!user_exist) {
    msg = "Check your Email And Password and try Again !";
    resp.status(400).send({ msg: msg, userData: user_exist });
  }
});

// ADDING ITEM BY  A RESTAURANT

// i have to create a react component where i will send a restaurant email id and password through add item link so
// i can call loginResturant api for adding product into restaurant menu list

app.post("/addItem", async (req, resp) => {});

// DISPLAYING MENU OF ALL RESTUARENT

app.post("/displaymenu", async (req, resp) => {});
