
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
    try {
        const insertQuery=`INSERT INTO users (username,email,password) VALUES ($1,$2,$3)`;
        const response = await pgClient.query(insertQuery,[username,email,password])
        // console.log(insertQuery)
        // console.log(response);
        res.json({
            message: "you have signed up"
        })

    } catch (error) {
        console.log(error);
        res.json({
            message:"error while signing up"
        })
    }

})

app.listen('8080', () => {
    console.log(`server is running on http://localhost:8080`)
})