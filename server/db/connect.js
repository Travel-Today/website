import mysql from "mysql";
const   connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'traveltoday'
})

connection.connect()

export  default connection;