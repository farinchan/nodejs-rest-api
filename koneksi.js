const mysql = require("mysql")

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'master',
    database : 'db_api'
  });
   
  connection.connect((err)=>{
      if (err) {
          throw err;
      } else {
          console.log("Mysql Database Connect");
      }
  });

  module.exports = {connection}