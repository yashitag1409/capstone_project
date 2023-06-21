const express = require("express");
const app = express();
const cors = require("cors");
const url = require("url");

const port = 4164 || PROCESS.env.PORT;

const axios = require("axios");
const mongoose = require("mongoose");

const REGISTER_SCHEMA = require("./Register_Schema");
const CUSTOMER_SCHEMA = require("./CustomerSchema");
const ORDER_SCHEMA = require("./Order_Schema");
const MENU_SCHEMA = require("./MenuSchema");

const json = require("jsonwebtoken");
var mysalt = "secretkey";

const multer = require("multer");
var path = require("path");
const fs = require("fs");

const password = "Naman1409";
const dbUrl = `mongodb+srv://Yashit1409:${password}@cluster0.9d4zjkb.mongodb.net/foodweb`;

app.use(cors());
app.use(express.json());

app.set("view engine", "ejs");
app.set("view", path.join(__dirname, "/views"));

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

app.set("view engine", "ejs");
app.set("view", path.join(__dirname, "/views"));
// app.use(express.static(`${__dirname}/public`));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Uploads is the Upload_folder_name
    // mkdir()
    cb(null, "uploads/" + req.query.email + "/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    var filetypes = /pdf|jpeg|jpg|png/;
    var mimetypes = filetypes.test(file.mimetype);
    var ext = file.mimetype.split("/")[1];
    var fileName = file.fieldname + "-" + Date.now() + `.${ext}`;
    // const mimTy = mime.split("/");
    cb(null, fileName);
  },
});

// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
const maxSize = 1 * 1000 * 1000;

var upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: function (req, file, cb) {
    // console.log(req);
    // Set the filetypes, it is optional
    var filetypes = /pdf|jpeg|jpg|png/;
    var mimetype = filetypes.test(file.mimetype);

    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb(
      "Error: File upload only supports the " +
        "following filetypes - " +
        filetypes
    );
  },

  // res is the name of file attribute
}).single("res"); //frontend se file

app.post("/upload", async (req, res, next) => {
  const email = req.query.email;
  const type = req.query.type;
  if (type === "customer") {
    var user_exist = await CUSTOMER_SCHEMA.findOne({ email: email });
    if (user_exist) {
      if (user_exist.password === req.query.password) {
        upload(req, res, function (err) {
          if (err) {
            console.log("================");
            console.log(err);
          } else {
            res.status(200).send({ msg: "file uploaded successfully" });
          }
        });
        // resp
        //   .status(200)
        //   .send({ msg: `welcome Back ${res_exist.res_name}`, data: res_exist });
      } else {
        res.status(400).send({ msg: "Invalid Password" });
      }
    } else {
      res.status(400).send({ msg: "Invalid Email Check your email" });
    }
  } else {
    var res_exist = await REGISTER_SCHEMA.findOne({ email: email });
    if (res_exist) {
      if (res_exist.password === req.query.password) {
        upload(req, res, function (err) {
          if (err) {
            console.log("================");
            console.log(err);
          } else {
            res.status(200).send({ msg: "file uploaded successfully" });
          }
        });
        // resp
        //   .status(200)
        //   .send({ msg: `welcome Back ${res_exist.res_name}`, data: res_exist });
      } else {
        res.status(400).send({ msg: "Invalid Password" });
      }
    } else {
      res.status(400).send({ msg: "Invalid Email Check your email" });
    }
  }

  // upload(req, res, function (err) {
  //   if (err) {
  //     console.log("================");
  //     console.log(err);
  //   } else {
  //     res.status(200).send({ msg: "file uploaded successfully" });
  //   }
  // });
});

// ADDING RESTAURANT

app.post("/registerRestaurant", async (req, resp) => {
  const email = req.body.email;
  const phoneNo = req.body.phoneNo;
  var ID = "fw-" + phoneNo;

  var res_exist = await REGISTER_SCHEMA.findOne({ email: email });

  path = "./uploads/Restaurant/" + email;
  if (res_exist) {
    resp.status(200).send({ msg: "Restaurant already Exist" });
  } else {
    await fs.access(path, (error) => {
      if (error) {
        fs.mkdir(path, (error) => {
          if (error) {
            console.log(error);
          } else {
            console.log(path);
            console.log("New Directory created successfully !!");
          }
        });
      } else {
        console.log("Given Directory already exists !!");
      }
    });

    var newRest = {
      owner_name: req.body.ownerName,
      res_name: req.body.resName,
      res_type: req.body.resType,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      closing_time: req.body.closingTime,
      open_time: req.body.openTime,
      phone_no: phoneNo,
      id: ID,
      // res_image: req.files,
    };

    const restaurant = new REGISTER_SCHEMA(newRest);
    const result = await restaurant.save();

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

  path = "./uploads/Customers/" + email;

  if (user_exist) {
    resp.status(400).send({ msg: "Customer Already Exist" });
  } else {
    await fs.access(path, (error) => {
      if (error) {
        fs.mkdir(path, (error) => {
          if (error) {
            console.log(error);
          } else {
            console.log(path);
            console.log("New Directory created successfully !!");
          }
        });
      } else {
        console.log("Given Directory already exists !!");
      }
    });
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
    user_exist = await CUSTOMER_SCHEMA.findOne({ email: email });

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
      if (err) {
        console.log(err);
      } else if (!user.validPassword(req.body.password)) {
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

app.post("/addItem", async (req, resp) => {
  var email = req.body.email;
  var user_exist = await CUSTOMER_SCHEMA.findOne({ email: email });
  if (user_exist) {
    const newItem = {
      email: email,
      res_name: req.body.resName,
      item_name: req.body.itemName,
      item_price: req.body.itemPrice,
      type: req.body.itemType,
    };

    const item = new MENU_SCHEMA(newItem);

    const result = await item.save();
    console.log(result);
    resp.status(200).send({ result: result });
  } else {
    var msg = "User Does Not exist My try Again ! SignUp / SignIn";
    resp.status(400).send({ result: msg });
  }
});

// DISPLAYING MENU OF ALL RESTUARENT

app.post("/displaymenubyResEmail", async (req, resp) => {
  var email = req.body.email;
  var user_exist = await CUSTOMER_SCHEMA.findOne({ email: email });

  if (user_exist) {
    var menuItem = await MENU_SCHEMA.find({ email: email });

    resp.status(200).send({ menuItem: menuItem });
  } else {
    var msg = "Plz Check R u login? or try Again";
    resp.status(400).send({ msg: msg });
  }
});

// showing all menu to customer

app.get("/displaymenu", async (req, resp) => {
  var menuItem = await MENU_SCHEMA.find();
  // console.log("++++++++++++++++++++++++++++");
  // console.log(menuItem);

  resp.status(200).send(menuItem);
});

// showing all menu to customer by re_name
app.post("/displaymenubyResName", async (req, resp) => {
  var resName = req.body.resName;

  var res_exist = await MENU_SCHEMA.find({ res_name: resName });
  if (res_exist) {
    resp.status(200).send(res_exist);
  } else {
    // console.log(err);
    resp.status(400).send({ msg: "Check Restaurant name" });
  }
});

//Displaying Restaurant only
app.post("/displayRes", async (req, resp) => {
  var res_names = await REGISTER_SCHEMA.find();

  resp.send({ data: res_names });
});

// Food bloging site
