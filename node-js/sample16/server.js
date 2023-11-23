require('dotenv').config();
const db = require('./db');


const getAll = async () => {
    const [rows, fields] = await db.query(`SELECT * FROM users`)
    return { rows, fields };
}

getAll().then(({ rows, fields }) => {
    console.log("rows", rows);
    console.log("fields", fields);
    console.log("-----------------------");
}).catch(error => {
    console.log(error.message)
})