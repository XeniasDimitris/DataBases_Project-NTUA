const express = require('express');
const router = express.Router();
const database = require('../configuration/database');
const path = require('path');
const db = database.db;

router.get('/',(req,res)=>{ // ROUTE
    let sql = 'SELECT * FROM `Baseis2019`.`author`';
    let query = db.query(sql, (err,results)=>{
        if (err) throw err;
        res.send(results);
    });
});

module.exports = router;