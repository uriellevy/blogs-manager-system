import mysql from "mysql2";

// create the connection to database
export const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1q2w3e4r",
    database: "blog"
});