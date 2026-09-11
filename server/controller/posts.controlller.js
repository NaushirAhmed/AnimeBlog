import Post from "../model/blog.model.js"
import slugify from "slugify"


export async function createPost(req, res) {
  try {
    const { title, image, category, excerpt, author, trailerVideoId, trailerThumb, body } = req.body

    if (!title || !image || !category || !excerpt || !author || !body) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Input field is required"
      })
    }

    const post = await Post.create({
      title,
      slug: slugify(title, { lower: true, strict: true }),
      image,
      category,
      excerpt,
      author,
      trailerVideoId,
      trailerThumb,
      body,
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