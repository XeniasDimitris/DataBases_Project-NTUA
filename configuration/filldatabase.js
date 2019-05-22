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
//Member Imports
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
//Publisher imports
sql = "INSERT INTO `Baseis2019`.`publisher` (`pubName`, `estYear`, `street`, `number`, `postalCode`) VALUES" +
    " ('Amber Collier', 1960, 'Coventry Court', 100, 10247)," +
    "('Ella Gardiner', 1958, 'Crummit Lane', 65, 87511)," +
    " ('Freya Carr', 1987, 'Moonglight Sonata', 56, 58745)," +
    " ('Katherine Baker', 1999, 'Elk Saint Lake', 54, 96665)," +
    " ('Keira Watson', 1935, 'Evergreen Lane', 987, 87747)," +
    " ('Kristin Schroder', 1991, 'Walkers Ridge Way', 124, 25412)," +
    " ('Lewis Wong', 1977, 'Lamberts Branch Road', 363, 74988)," +
    " ('Lola Henry', 1998, 'Hedge Bridge', 12, 69693)," +
    " ('Nicholas Bryant', 1960, 'Hallow Street', 74, 74512)," +
    " ('Yvonne Pfaff', 1974, 'Gnatty Creek Road', 545, 96696);"
    db.query(sql,(err,results)=>{
        if (err) throw err;
        console.log('Database Filled');
    });
//Books Imports
sql = "INSERT INTO `Baseis2019`.`Book` (`ISBN`, `title`, `pubYear`, `numpages`, `pubName`) VALUES" +
    " ('978-1-60309-013-1', 'Johny Boo', 2010, 145, 'Kristin Schroder')," +
    " ('978-1-60309-025-4', 'American Elf', 1974, 123, 'Keira Watson')," +
    " ('978-1-60309-047-6', 'August Moon', 1955, 654, 'Keira Watson')," +
    " ('978-1-60309-050-6', 'The 120 Days of Simon', 1999, 784, 'Freya Carr')," +
    " ('978-1-60309-062-9', 'March', 1992, 254, 'Katherine Baker')," +
    " ('978-1-60309-301-9', 'Hack', 1987, 363, 'Lola Henry')," +
    " ('978-1-60309-322-4', 'Apocaliptixa', 1963, 901, 'Lola Henry')," +
    " ('978-1-60309-375-0', 'Far Arden', 1978, 699, 'Katherine Baker')," +
    " ('978-1-60309-386-6', 'God is Dissapointed', 1995, 454, 'Freya Carr')," +
    " ('978-1-891830-19-8', 'Poison', 1997, 623, 'Keira Watson')," +
    " ('978-1-891830-71-6', 'AEIOU', 1963, 324, 'Yvonne Pfaff')," +
    " ('978-1-891830-75-4', '110 Repc', 1987, 456, 'Amber Collier')," +
    " ('978-1-891830-90-7', 'Korgi', 2011, 187, 'Ella Gardiner');"
    " (11, 'Laura', 'Dalle', 'Foley Street', 147, 21210, '2018-12-31');";
    db.query(sql,(err,results)=>{
        if (err) throw err;
        console.log('Database Filled');
    });



};

module.exports.fillDatabase = fillDatabase;