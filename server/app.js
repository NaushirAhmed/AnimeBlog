import express from "express"
import cors from "cors"
import 'dotenv/config';
import connectedDB from "./config/mongo.config.js"
import Postrouter from "./router/post.route.js"

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.use("/api/post", Postrouter)

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(400).json({
    success: false,
    error: true,
    message: err.message || 'Something went wrong',
  });
});

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