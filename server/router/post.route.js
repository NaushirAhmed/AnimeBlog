import express from "express"
import upload from '../middleware/multer.js'
import { createPost } from "../controller/posts.controlller.js"

const Postrouter = express.Router()

Postrouter.post("/create",upload.fields([
    {name : 'image',maxCount: 1},
    {name :'video',maxCount : 1}
]) ,createPost)

export default Postrouter