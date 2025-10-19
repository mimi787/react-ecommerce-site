import express from 'express';//created express application
const app = express()
const port = 8081
import bodyParser from 'body-parser';
import { createConnection } from 'mysql2';


var con = createConnection({
    host: "localhost",
    database: "myappdb",
    user: "root",
    password: "Gopher2020"
});

con.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }
    console.log("Connected to MySQL database.");
});

app.get('/',(req, res)=>{
    console.log("here")
    res.send("hi")
})


app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`)
});