const mongoose = require("mongoose");
const Res_schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  owner_name: {
    type: String,
    required: true,
  },
  res_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  open_time: {
    type: String,
    required: true,
  },
  closing_time: {
    type: String,
    required: true,
  },
  phone_no: {
    type: Number,
    required: true,
  },
  res_image: {
    type: String,
    required: false,
  },
});

const REGISTER_SCHEMA = mongoose.model("RES_REGISTER", Res_schema);
module.exports = REGISTER_SCHEMA;
