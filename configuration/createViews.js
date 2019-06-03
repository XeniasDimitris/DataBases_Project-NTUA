function createViews(db) {
    //Views


   /* sql = "CREATE VIEW `authview`  AS " +
    " SELECT `author`.`AFirst`, `author`.`ALast` "+
    " FROM `author` ;";
    db.query(sql,(err,results)=>{
        if (err) throw err35;
        console.log('View created');
    });

    sql = "CREATE VIEW book_view AS SELECT " +
    "book.title," +
    "reminder.date_of_borrowing " +
    "FROM " +
    "book, " +
    "reminder ;"
    db.query(sql,(err,results)=>{
        if (err) throw err35;
        console.log('View created');
    });


//STATISTICS

// CREATE VIEW cntbooks AS
// SELECT COUNT (*) 
// FROM borrows

// CREATE VIEW cntemp AS
// SELECT COUNT(*)
// FROM employee

// CREATE VIEW cntmemb AS
// SELECT COUNT(*)
// FROM member

// CREATE VIEW cntpub AS
// SELECT COUNT(*)
// FROM publisher

//posa antitipa exei kathe vivlio
// CREATE VIEW shelfBook AS
// SELECT book.title,copies.copyNr
// FROM book,copies
// WHERE (
// copies.ISBN = book.ISBN )








*/

}




module.exports.createViews = createViews;


