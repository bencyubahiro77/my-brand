const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRouter = require("./routes/blog");

//middleware
app.use(express.json());
app.use("/api/blogs", blogRouter);


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CRUD",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to MongoDB");
      }
    }
  );

 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;
