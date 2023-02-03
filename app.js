const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const blogRouter = require('./routes/blog');
const commentRoutes = require('./routes/comment');
const contactRoutes = require('./routes/contact');
const authRoutes = require('./routes/auth');
//const likeRoutes = require('./routes/like');

const app = express();

//middleware
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/blogs", blogRouter);
app.use('/comment', commentRoutes);
app.use('/contact', contactRoutes);
app.use('/api/auth', authRoutes);
//app.use('/api/likes', likeRoutes);

app.use((req, res, next) => {
    const token = req.header("x-auth-token");
    if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
    }
    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
    } catch (error) {
    return res.status(401).json({ message: "Token is not valid" });
    }
    });

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://bencyubahiro77:Cyubahiro13@cluster0.wzdv6c5.mongodb.net/test',
{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {
console.log("Connected to MongoDB");
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
})
.catch(error => {
console.log(error.message);
});
 

