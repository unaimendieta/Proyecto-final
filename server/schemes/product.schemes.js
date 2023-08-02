const mongoose = require("mongoose");

const ProductScheme = mongoose.Schema({
  _id: String,
  name: String,
  img: [String],
  category: String,
  price: [
    {
      Vendor: String,
      Price: Number,
      Url: String,
    },
  ],
  priceHystory: [
    {
      vendor: String,
      prices: [
        {
          date: String,
          value: Number,
        },
      ],
    },
  ],
  valoration: String,
  coments: [
    {
      name: String,
      valoration: Number,
      text: String,
    },
  ],
  desc: String,
  characteristics: [
    {
      name: String,
      detail: String,
    },
  ],
  views: Number,
  creation: String
});


const ProductModel = mongoose.model("product", ProductScheme);

module.exports = ProductModel;