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
    " (9576, 'Amie', 'Cassy', '2018-09-25');"
    db.query(sql,(err,results)=>{
        if (err) throw err;
        console.log('Database Filled');
    });

    sql = "INSERT INTO `Baseis2019`.`member` (`memberID`, `MFirst`, `MLast`, `Street`, `number`, `postalCode`, `Mbirthdate`) VALUES " +
    " (1, 'Maddison', 'Houghton', 'Caerfai Bay Road', 85, 22079, '2018-09-03'), " +
    " (2, 'Declan ', ' Elliott', 'Cabell Avenue', 1608, 6320, '2019-05-09')," +
    " (3, 'Samantha', 'Miah', 'Jones Street', 4674, 76148, '2018-09-17')," +
    " (4, 'Summer ', 'Hartley', 'Saints Alley', 139, 33647, '2018-12-09')," +
    " (6, 'Katie', 'Mills', 'Cedarstone Drive', 436, 44856, '2018-12-29')," +
    " (7, 'Natasha', 'Norris', 'Linden Avenue', 1647, 32830, '2018-09-21')," +
    " (8, 'Anna', 'Donely', 'Jett Lane', 163, 15446, '2018-06-24')," +
    " (9, 'Zachary', 'Dobson', 'Ralhph Drive', 412, 65378, '2018-09-30')," +
    " (10, 'Henry', 'Jones', 'Wilson Street', 110, 55477, '2018-11-11')," +
    " (11, 'Laura', 'Dalle', 'Foley Street', 147, 21210, '2018-12-31');"
    db.query(sql,(err,results)=>{
        if (err) throw err;
        console.log('Database Filled');
    });

};

module.exports.fillDatabase = fillDatabase;