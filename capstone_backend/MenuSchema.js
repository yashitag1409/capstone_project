const mongoose = require("mongoose");

const Menu_schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  res_name: {
    type: String,
    required: true,
  },
  item_name: {
    type: String,
    required: true,
  },
  item_price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const MENU_SCHEMA = mongoose.model("RES_MENU", Menu_schema);
module.exports = MENU_SCHEMA;
