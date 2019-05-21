const express = require('express');
const router = express.Router();
const database = require('../configuration/database');
const db = database.db;

router.get('/',(req,res)=>{ // ROUTE
    let sql = 'SELECT * FROM `Baseis2019`.`author`';
    let query = db.query(sql, (err,results)=>{
        if (err) throw err;
        console.log(results);
        res.send("Hello");
    });
});

module.exports = router;