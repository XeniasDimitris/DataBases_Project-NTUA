const mysql = require('mysql');
const fillDatabase = require('./filldatabase');
const createDatabase = require('./createDatabase');
const createForeignKeys = require('./createForeignkeys');
const createTriggers = require('./createTriggers');


const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root'  
});

db.connect((err)=>{
    if (err) { 
        throw err;
    }
    console.log('MySQL Connecteeeed');
});

function CreateDatabase(){


    var sql = 'DROP DATABASE IF EXISTS Baseis2019'
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'CREATE DATABASE Baseis2019';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    module.exports.fillDatabase = fillDatabase;
    
    createDatabase.createDatabase(db);
    createForeignKeys.createForeignkeys(db);
    createTriggers.createTriggers(db);
     
    
};
   
function FillDatabase(){
    fillDatabase.fillDatabase(db);
}

module.exports.CreateDatabase = CreateDatabase();
module.exports.FillDatabase = FillDatabase();
module.exports.db = db;