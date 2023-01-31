const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/contact');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/mydb', {
useNewUrlParser: true,
useUnifiedTopology: true,
});

app.use('/', routes);

app.listen(3000, () => {
console.log('Server started on port 3000');
});