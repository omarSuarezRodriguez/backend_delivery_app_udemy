const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'martin1',
    database: 'udemy_delivery'

});

db.connect(function(err) {

    if (err) throw err;
    console.log('Database Conected!');
});

module.exports = db;