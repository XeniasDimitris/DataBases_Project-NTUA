const express = require('express');
const app = express();
const path = require('path');
const configDatabase = require('./configuration/database');
const configServer = require('./configuration/server');
const logger = require('./middlewares/logger');
const insert = require('./routes/insert');
const show = require('./routes/show');
const deleteit = require('./routes/delete');
const update = require('./routes/update');



configServer.openServer(app);
configDatabase.CreateDatabase;
configDatabase.FillDatabase;


app.use('/show',show);
app.use('/insert',insert);
app.use('/delete',deleteit);
app.use('/update',update);
//app.use(logger); // INIT MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public'))); // public is static folder MIDDLEWARE