import mysql from 'mysql2/promise'

const conf = {
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
}


async function create_connection(){
    return await mysql.createConnection(conf)
}

export async function insert_req(url, method, ip){
    const sql = "INSERT INTO requests (timestamp, url, method, ip) VALUES (?, ?, ?, ?);"

    const cnx = await create_connection()
    await cnx.execute(sql, [new Date(), url, method, ip])
}

export async function select_req(){
    const sql = "SELECT url,COUNT(url)  as count, method FROM requests GROUP BY url, method ORDER BY count DESC ;"

    const cnx = await create_connection()
    const [rows, _fields] = await cnx.execute(sql)

    return rows
}