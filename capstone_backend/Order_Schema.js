const mongoose = require("mongoose");

const order_schema = new mongoose.Schema({
  user_name: {
    type: String,
    require: true,
  },
  order_qty: {
    type: Number,
    required: true,
  },
  order_item: {
    type: String,
    required: true,
  },
  order_pic: {
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
  res_name: {
    type: String,
    required: true,
  },
  res_add: {
    type: String,
    required: true,
  },
});

const ORDER_SCHEMA = mongoose.model("ORDER_SCHEMA", order_schema);
module.exports = ORDER_SCHEMA;
