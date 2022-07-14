import mysql from "mysql"
const connect=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"cinemadb"
})
export default connect