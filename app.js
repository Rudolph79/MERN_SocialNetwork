const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const config = require('./config');

// Routes
const postRoutes = require('./routes/post.route');

// middleware
app.use(morgan('dev'));


app.use('/', postRoutes);

const port = 5000;
app.listen(port, () => {
    console.log(`The Application is running on ${port}`);
});