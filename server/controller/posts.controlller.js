import Post from "../model/blog.model.js"
import slugify from "slugify"
import cloudinary from '../config/claudinary.confiq.js'
import fs from 'fs'


export async function createPost(req, res) {
  try {
   const { title, category, excerpt, author, trailerThumb, body } = req.body

if (!title || !category || !excerpt || !author || !body) {
  return res.status(400).json({
    success: false,
    error: true,
    message: "Input field is required"
  })
}

const imageFile = req.files?.image?.[0];
const videoFile = req.files?.video?.[0];

if (!imageFile) {
  return res.status(400).json({
    success: false,
    error: true,
    message: "Cover image is required"
  })
}
    let imageUrl = null;
    let videoUrl = null;
    let imagePublicId = null;
    let videoPublicId = null;

    if(imageFile){
      const imageResult = await cloudinary.uploader.upload(imageFile.path,{
        resource_type : 'image',
        folder : 'anime-blog/anime'
      })
      imageUrl = imageResult.secure_url;
      imagePublicId = imageResult.public_id;
      fs.unlinkSync(imageFile.path);
    }

    if(videoFile){
      const videoResult = await cloudinary.uploader.upload(videoFile.path,{
        resource_type :'video',
        folder :'anime-blog/video'
      })

      videoUrl = videoResult.secure_url;
      videoPublicId = videoResult.public_id;
      fs.unlinkSync(videoFile.path);
    }

    let parsedBody;
try {
  parsedBody = JSON.parse(body);
} catch (err) {
  return res.status(400).json({
    success: false,
    error: true,
    message: "Invalid body format — must be valid JSON array"
  });
}
    const post = await Post.create({
      title,
      slug: slugify(title, { lower: true, strict: true }),
      image :imageUrl,
      imagePublicId : imagePublicId,
      category,
      excerpt,
      author,
      trailerVideoId :videoUrl,
      trailerVideoPublicId: videoPublicId,
      trailerThumb,
      body : parsedBody,
    })
    return res.status(201).json({
      success: true,
      error: false,
      message: "Post successfully created",
      data: post
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: error.message
    })
  }
}