const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');


const app = express();


//bodyparser middleware

app.use(bodyParser.json());

//db configure
const db = require('./config/keys').mongoURI;

//Connect to mongo
mongoose
  .connect(db)
  .then(()=> console.log('mongodb connected...'))
  .catch(err => console.log(err));


// user routes
app.use('/api/items', items);


const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log('server started on port ${port}'));
