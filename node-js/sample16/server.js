require('dotenv').config();
const db = require('./db');

    
const getAll = async () => {
    const [rows, fields] = await db.query(`SELECT * FROM users`)
        console.log("rows", rows);
        console.log("fields", fields);

        console.log("-----------------------");
}

getAll()