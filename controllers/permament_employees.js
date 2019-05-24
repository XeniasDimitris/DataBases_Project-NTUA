const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

exports.permanent_employees_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`permanent_employees`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results
        });
    });
};