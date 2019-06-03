const createConnection = require('./createConnection');
const fillDatabase = require('./fillDatabase');
const createDatabase = require('./createDatabase');
const createforeignKeys = require('./createforeignKeys');
const createTriggers = require('./createTriggers');
const createViews = require('./createViews');
const mysql = require('mysql');

//CREDENTIALS
const db = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root'  
    });

//FUNCTIONS    
function CreateConnection() {createConnection.createConnection();}
function CreateDatabase() {createDatabase.createDatabase(db);};
function CreateForeignKeys() {createforeignKeys.createforeignKeys(db);}
function FillDatabase() {fillDatabase.fillDatabase(db);}
function CreateTriggers() {createTriggers.createTriggers(db);}
function CreateViews() { createViews.createViews(db); }   
//EXPORTS
module.exports.CreateConnection = CreateConnection();
module.exports.db = db;
module.exports.CreateDatabase = CreateDatabase();
module.exports.CreateForeignKeys = CreateForeignKeys();
module.exports.FillDatabase = FillDatabase();
module,exports.CreateTriggers = CreateTriggers();
//module.exports.CreateViews = CreateViews();
