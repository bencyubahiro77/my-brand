const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv= require('dotenv');
const SwaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const cors = require('cors')



const blogRouter = require('./routes/blog');
const commentRoutes = require('./routes/comment');
const contactRoutes = require('./routes/contact');
const authRoutes = require('./routes/auth');

dotenv.config({
    path:"./.env"
});
const app = express();

const swaggerOptions = {  
    swaggerDefinition: {
        openapi : '3.0.0',
        info : {
            title: 'Ben Apis documentation',
            version: '1.0.0',
            description: 'Blog,contact,authentication and comment APIs',
            contact:{
                name :"benjamin"
            },
        },
        servers:[ 
            { 
                url:'http://localhost:3000'
            } 
        ],
       
    },
    apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)


//middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use("/api/blogs", blogRouter);
app.use('/comment', commentRoutes);
app.use('/contact', contactRoutes);
app.use('/api/auth', authRoutes);

app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(swaggerDocs));

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
console.log('HERE ' +  error.message);
});
 


