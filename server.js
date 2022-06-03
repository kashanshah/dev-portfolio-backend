const express = require('express');
require('dotenv').config({path: '.env.local'});

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(express.raw());
app.use(express.json());

app.get('/', (req, res) => {
  // res.download('server.js')
  res.render('index', {text: process.env.NODE_ENV})
});

const adminRoutes = require('./routes/auth');
const mailRoutes = require('./routes/mail');

app.use('/auth', adminRoutes);
app.use('/mail', mailRoutes);

app.listen(3001);
