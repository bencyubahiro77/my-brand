const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv= require('dotenv');
const swaggerJSdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const blogRouter = require('./routes/blog');
const commentRoutes = require('./routes/comment');
const contactRoutes = require('./routes/contact');
const authRoutes = require('./routes/auth');
//const { version } = require("chai");
//const likeRoutes = require('./routes/like');

dotenv.config({
    path:"./.env"
});
const app = express();

const options ={ 
    definition: {
        openapi : '3.0.0',
        info : {
            title: 'Blog,contact,authentication and comment APIs',
            version: '1.0.0',
        },
        servers:[
            {
                url: 'http://localhost:3000/api'
            }
        ]
    },
    apis: ['./routes/blog.js', './routes/contact.js', './routes/auth.js', './routes/comment.js']
}
const swaggerSpec = swaggerJSdoc(options)

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));

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
    console.log(res.header);
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
const DB = process.env.DB_ONLINE;

mongoose.connect(DB,
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
 

