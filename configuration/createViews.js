function createViews(db) {
    //Views

    // sql = 'SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";'+
    // 'SET AUTOCOMMIT = 0;'+
    // 'START TRANSACTION;'+
    // 'SET time_zone = "+00:00";';
    // db.query(sql,(err,results)=>{
    //     if (err) throw err34;
    //     console.log('View created');
    // });

    sql = "CREATE VIEW `authview`  AS " +
    " select `author`.`AFirst` AS `AFirst`,`author`.`ALast` AS "+
    "`ALast` from `author` ;";
    db.query(sql,(err,results)=>{
        if (err) throw err35;
        console.log('View created');
    });


}

module.exports.createViews = createViews;