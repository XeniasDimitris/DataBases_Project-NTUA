function createforeignKeys (db) {
    // put Foreign Keys in tables
    sql = 'ALTER TABLE `Baseis2019`.`Book` ADD FOREIGN KEY (`pubName`) REFERENCES `publisher`(`pubName`) ON DELETE CASCADE ON UPDATE CASCADE;';
    db.query(sql,(err,results)=>{
        if (err) throw err14;
    });
    sql = 'ALTER TABLE `Baseis2019`.`category` ADD FOREIGN KEY (`supercategoryName`) REFERENCES `category`(`categoryName`) ON DELETE RESTRICT ON UPDATE CASCADE;';
    db.query(sql,(err,results)=>{
        if (err) throw err15;
    });
    sql = 'ALTER TABLE `Baseis2019`.`copies` ADD FOREIGN KEY (`ISBN`) REFERENCES `Book`(`ISBN`) ON DELETE CASCADE ON UPDATE CASCADE;';
    db.query(sql,(err,results)=>{
        if (err) throw err16;
    });
    sql = 'ALTER TABLE `Baseis2019`.`permanent_employee` ADD FOREIGN KEY (`empID`) REFERENCES `employee`(`empID`) ON DELETE CASCADE ON UPDATE CASCADE;';
    db.query(sql,(err,results)=>{
        if (err) throw err17;
    });
    sql = 'ALTER TABLE `Baseis2019`.`temporary_employee` ADD FOREIGN KEY (`empID`) REFERENCES `employee`(`empID`) ON DELETE CASCADE ON UPDATE CASCADE;';
    db.query(sql,(err,results)=>{
        if (err) throw err18;
    });
    sql = 'ALTER TABLE `Baseis2019`.`borrows` ADD FOREIGN KEY (`memberID`) REFERENCES `member`(`memberID`) ON DELETE CASCADE ON UPDATE CASCADE;';
    db.query(sql,(err,results)=>{
        if (err) throw err19;
    });
    sql = 'ALTER TABLE `Baseis2019`.`borrows` ADD FOREIGN KEY (`ISBN`, `copyNr`) REFERENCES `copies`(`ISBN`, `copyNr`) ON DELETE CASCADE ON UPDATE CASCADE;';
    db.query(sql,(err,results)=>{
        if (err) throw err21;
    });
    sql = 'ALTER TABLE `Baseis2019`.`belongs_to` ADD FOREIGN KEY (`ISBN`) REFERENCES `Book`(`ISBN`) ON DELETE CASCADE ON UPDATE CASCADE;';
    db.query(sql,(err,results)=>{
        if (err) throw err22;
    });
    sql = 'ALTER TABLE `Baseis2019`.`belongs_to` ADD FOREIGN KEY (`categoryName`) REFERENCES `category`(`categoryName`) ON DELETE CASCADE ON UPDATE CASCADE;';
    db.query(sql,(err,results)=>{
        if (err) throw err23;
    });
    sql = 'ALTER TABLE `Baseis2019`.`reminder` ADD FOREIGN KEY (`empID`) REFERENCES `employee`(`empID`) ON DELETE CASCADE ON UPDATE CASCADE;';
    db.query(sql,(err,results)=>{
        if (err) throw err24;
    });
    sql = 'ALTER TABLE `Baseis2019`.`reminder` ADD FOREIGN KEY (`memberID`, `ISBN`, `copyNr`, `date_of_borrowing`) REFERENCES `borrows`(`memberID`, `ISBN`, `copyNr`, `date_of_borrowing`) ON DELETE CASCADE ON UPDATE CASCADE;';
    db.query(sql,(err,results)=>{
        if (err) throw err27;
    });
    sql = 'ALTER TABLE `Baseis2019`.`written_by` ADD FOREIGN KEY (`ISBN`) REFERENCES `Book`(`ISBN`) ON DELETE CASCADE ON UPDATE CASCADE;';
    db.query(sql,(err,results)=>{
        if (err) throw err29;
    });
    sql = 'ALTER TABLE `Baseis2019`.`written_by` ADD FOREIGN KEY (`authID`) REFERENCES `author`(`authID`) ON DELETE CASCADE ON UPDATE CASCADE;';
    db.query(sql,(err,results)=>{
        if (err) throw err30;
        console.log('Database created');
    });
}

module.exports.createforeignKeys = createforeignKeys;