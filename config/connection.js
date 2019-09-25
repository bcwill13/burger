var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 8889,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
}

connection.connect(function(err) {
    if (err) {
        console.log("Error");
        return;
    }
    console.log("Connection as id" + connection.threadid);
});

module.exports = connection;
