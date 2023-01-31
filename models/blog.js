const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const blogSchema = new Schema({

  image: String,
  title: String,
  body: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Blog", blogSchema);