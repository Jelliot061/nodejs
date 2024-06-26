import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'openchat'
});

db.connect((error) => {
    if(error) {
        console.error(`[error with database connection] : ${error}`)
        return
    }

    console.log(`MYSQL connected as id: ${db.threadId}`)
})

export const doQuery = (sql, options) => {
    return new Promise ((resolve, reject) => {
        db.query(sql, options, (err, res) => {
            if(err) {
                throw err
            }

            resolve(res)
        })
    })
}

export default db