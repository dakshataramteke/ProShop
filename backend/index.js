const express = require('express');
const db = require("./Config/db");
const bcrypt = require("bcrypt");

const colors = require('colors');
const morgan = require('morgan');
const authRoute = require('./routes/authRoute');
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/v1/auth',authRoute);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
