const mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

const customer_schema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    min: 1,
  },
  user_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone_no: {
    type: Number,
    required: true,
  },
});

customer_schema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

customer_schema.methods.validPassword = (password) => {
  return bcrypt.compareSync(password, this.password);
};

const CUSTOMER_SCHEMA = mongoose.model("CUS_REGISTER", customer_schema);
module.exports = CUSTOMER_SCHEMA;
