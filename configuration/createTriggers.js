function createTriggers(db) {
    //Triggers
    sql = "CREATE TRIGGER `Baseis2019`.`insertEmployee` AFTER INSERT ON "+
        "`Baseis2019`.`employee` FOR EACH ROW BEGIN IF NEW.type = 'permanent'"+
        "THEN INSERT INTO `Baseis2019`.`permanent_employee`(empID,HiringDate)"+
        " VALUES(NEW.empID, NEW.Information); ELSE INSERT INTO "+
        " `Baseis2019`.`temporary_employee`(empID,ContactNumb) "+
        " VALUES(NEW.empID, NEW.Information); END IF; END;";
    db.query(sql,(err,results)=>{
        if (err) throw err31;
        console.log('Triggers created');
    });
    sql ="CREATE TRIGGER Baseis2019.insertDate BEFORE INSERT ON "+
        " Baseis2019.borrows FOR EACH ROW SET NEW.date_must_be_returned"+
        " = DATE_ADD( NEW.date_of_borrowing, INTERVAL 30 DAY);";
    db.query(sql,(err,results)=>{
        if (err) throw err101;
        console.log('Triggers created');
    });


}

module.exports.createTriggers = createTriggers;