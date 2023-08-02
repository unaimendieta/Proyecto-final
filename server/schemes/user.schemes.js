const mongoose = require("mongoose");

const UserScheme = mongoose.Schema({
  _id: String,
  name: String,
  surname: String,
  plan: {
    name: String,
    price: Number,
    frequency: String,
    historic: Boolean,
    likeMax: Number,
  },
  payments: [
    {
      date: String,
      planName: String,
      price: String,
      state: String,
    }
  ],
  liked: [String],
});


const UserModel = mongoose.model("user", UserScheme);

module.exports = UserModel;