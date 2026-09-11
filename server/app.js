import express from "express"
import cors from "cors"
import 'dotenv/config';
import connectedDB from "./config/mongo.config.js"
import Postrouter from "./router/post.route.js"

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.use("/api/post", Postrouter)

connectedDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  })
  .catch((err) => {
    console.error("Failed to connect to DB:", err.message)
    process.exit(1)
  })