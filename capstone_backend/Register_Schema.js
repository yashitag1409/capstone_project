const mongoose = require("mongoose");
const Res_schema = new mongoose.Schema({
  owner_name: {
    type: String,
    required: true,
  },
  res_name: {
    type: String,
    required: true,
  },
  res_type: {
    type: Boolean,
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
});

const REGISTER_SCHEMA = mongoose.model("RES_REGISTER", Res_schema);
module.exports = REGISTER_SCHEMA;
