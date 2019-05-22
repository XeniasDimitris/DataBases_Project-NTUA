const express = require('express');
const path = require('path');
const configDatabase = require('./configuration/database');
const configServer = require('./configuration/server');
const logger = require('./middlewares/logger');
const insert = require('./routes/insert');
const show = require('./routes/show');
const app = express();
configServer.openServer(app);
configDatabase.CreateDatabase;
configDatabase.FillDatabase;


app.use('/show',show);
//app.use(logger); // INIT MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public'))); // public is static folder MIDDLEWARE


