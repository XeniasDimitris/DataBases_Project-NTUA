const express = require('express');
const path = require('path');
const mysql = require('mysql');

const db= mysql.createConnection({
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
    var sql = 'DROP DATABASE IF EXISTS nodemysql'
    db.query(sql,(err,results)=>{
        if (err) throw err;
        console.log('Dropped the Database...');
    });
    sql = 'CREATE DATABASE nodemysql';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        console.log('Created the Database')
    });
}
CreateDatabase();



const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/getposts',(req,res)=>{
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err,results)=>{
        if (err) throw err;
        console.log(results);
        res.sendFile(path.join(__dirname), 'public', 'index.html');
    });
});

app.listen('3000',()=>{
    console.log('Server started on port 3000');
});
