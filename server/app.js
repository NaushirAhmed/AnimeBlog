import express from "express"
import connectedDB from "./config.js/mongo.config.js"
import 'dotenv/config';

const app = express()

const port =3000

app.get('/',(req,res)=>{
    res.send('Hello world')
})


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
connectedDB()