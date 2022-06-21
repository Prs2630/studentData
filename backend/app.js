const express = require('express');
const app = express();
const cors = require('cors');

const registerRoute = require("./routes/registerRoute")
const loginRoute = require('./routes/loginRoute')
const studentRoute = require('./routes/studentRoute')

app.use(express.urlencoded())
app.use(express.json())
app.use(cors())
app.use('/api', registerRoute)
app.use('/api', loginRoute)
app.use('/api', studentRoute)

module.exports = app;
