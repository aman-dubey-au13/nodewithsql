const mysql = require("mysql2");

const connection = mysql
  .createConnection({
    host: "lifetree.clzg1o7oakxi.ap-south-1.rds.amazonaws.com", // HOST NAME
    user: "development", // USER NAME
    database: "dev", // DATABASE NAME
    password: "7xtpD)B6zwND9/9F", // DATABASE PASSWORD
  })
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });

module.exports = connection;
