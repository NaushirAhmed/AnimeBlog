import express from "express"
import { createPost } from "../controller/posts.controlller.js"

const Postrouter = express.Router()

Postrouter.post("/create", createPost)

export default Postrouter