
import express from 'express';
import { Client } from 'pg';
import 'dotenv/config';

const app = express()
const pgClient = new Client(process.env.NEONDB_URL)
app.use(express.json())

// const pgClient2=new Client({
//     user:"neondb_owner",
//     password:process.env.PASSWORD,
//     port:5432,
//     host:process.env.HOST,
//     database:'neondb',
//     ssl:true
// })

pgClient.connect().then(() => {
    console.log('db connected')
}).catch((e) => {
    console.log(e)
})

// const main=async () => {
//     const res=await pgClient.query("SELECT * FROM users")
//     console.log(res.rows);
// }

// main()

app.post('/signup', async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;

    try {
        const insertQuery = `INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING id`;
        const AddressInsertQuery = `INSERT INTO addresses (city,country,street,pincode,user_id) VALUES ($1,$2,$3,$4,$5)`;

        await pgClient.query("BEGIN")

        const response = await pgClient.query(insertQuery, [username, email, password])
        const userId = response.rows[0].id;
        await new Promise(x => setTimeout(x, 100 * 1000))
        const address = await pgClient.query(AddressInsertQuery, [city, country, street, pincode, userId])
        await pgClient.query("COMMIT")



        // console.log(insertQuery)
        console.log(response);
        res.json({
            message: "you have signed up"
        })

    } catch (error) {
        console.log(error);
        res.json({
            message: "error while signing up"
        })
    }

})

app.post('/transaction', (req, res) => {
    const query = "UPDATE USER WHERE userId=1 SET balance=balance-10"
    const query2 = "UPDATE USER WHERE userId=2 SET balance=balance+10"
})

app.get('/better-metadata', async(req, res) => {
    const id = req.query.id;
    const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
        FROM users
        JOIN addresses ON users.id = addresses.user_id
        WHERE users.id = $1;`

 const response=await pgClient.query(query,[id])
 res.json({
    response:response.rows
 })
})

app.listen('8080', () => {
    console.log(`server is running on http://localhost:8080`)
})