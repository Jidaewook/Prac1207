const express = require('express');
const mongoose = require('mongoose');


const app = express();
const userRoutes = require('./Routes/user');
const profileRoutes = require('./Routes/profile');
const bbsRoutes = require('./Routes/bbs');

const db = 'mongodb+srv://psatdoctor:asdf1q2w@cluster0-ifekx.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('mongodb connected..'))
    .catch(err => console.log(err));

const port = 3000;

app.listen(port, () => console.log(`Server Running on ${port}`));