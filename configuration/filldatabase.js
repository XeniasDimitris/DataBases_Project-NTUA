function fillDatabase(db) {

    //Author Imports
    sql = "INSERT INTO `Baseis2019`.`author` (`authID`, `AFirst`, `ALast`, `Abirthdate`) VALUES "+
    " (9566, 'Mariyam', 'Mendez', '2019-05-01'), " +
    " (9568, 'Miah', 'Goodwin', '2019-05-02'), " +
    " (9569, 'Reem', 'Odonnell', '2019-05-04'), " +
    " (9570, 'Braxton', 'Daughtery', '2019-05-05')," +
    " (9571, 'Menlinda', 'Gates', '2019-04-03'), " +
    " (9572, 'Amy', 'Neville', '2019-04-19'), " +
    " (9573, 'Naomi', 'Gloom', '2019-01-06'), " +
    " (9574, 'Nick', 'Frank', '2019-01-23'), " +
    " (9575, 'Pan', 'Biggy', '2018-08-06'), " +
    " (9576, 'Amie', 'Cassy', '2018-09-25');";
    db.query(sql,(err,results)=>{
        if (err) throw err;
        console.log('Database Filled');
    });
    
    // sql = "INSERT INTO `Baseis2019`.`author` (`authID`, `AFirst`, `ALast`, `Abirthdate`) VALUES   ('2', 'xenias', 'dimitrios', '2019-05-24') ,('9565', 'Mike', 'Fil', '2019-05-09');"
    // db.query(sql,(err,results)=>{
    //     if (err) throw err;
    //     console.log('Database Filled');
    // });
    
};

module.exports.fillDatabase = fillDatabase;