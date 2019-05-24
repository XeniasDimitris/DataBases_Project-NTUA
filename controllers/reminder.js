const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

exports.reminder_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`reminder`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results
        });
    });
};

exports.reminder_create_get = function(req,res,){
    res.sendFile(path.join(__dirname,'../public/forms','reminder_form.html'));

};

exports.reminder_create_post = function(req,res,next){
    
    let sql = 'SELECT * FROM `Baseis2019`.`borrows` ';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        let length = results.length;
        var empID= req.body.id;     
        for (var i=0; i<length; i++){
            var time = new Date();    
            sql = `INSERT INTO Baseis2019.reminder VALUES ('${empID}','${results[i].memberID}', '${results[i].ISBN}', '${results[i].copyNr}', '${results[i].date_of_borrowing}', '${time}');`;
            db.query(sql,(err,results2)=>{
                if (err) throw err;
            })
        }
        res.render('succesfull_action',{ action : 'remind', type: 'all members'});
    });
};

exports.reminder_update_get = function(req,res){
    res.send('reminder_update_get');
}

exports.reminder_update_post = function(req,res){
    res.send('reminder_update_post');
}

exports.reminder_delete_get = function(req,res){
    res.send('reminder_delete_get');
}

exports.reminder_delete_post = function(req,res){
    res.send('reminder_delete_post');
}