const express = require('express');
const path = require('path');
const configDatabase = require('./configuration/database');
const configServer = require('./configuration/server');
const logger = require('./middlewares/logger');




const app = express();
configServer.openServer(app);
configDatabase.CreateDatabase;
configDatabase.FillDatabase;

//app.use(logger); // INIT MIDDLEWARE

app.use(express.static(path.join(__dirname, 'public'))); // public is static folder MIDDLEWARE

app.use('/api/members', require('./routes/posts'));
