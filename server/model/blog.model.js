import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    imagePublicId: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    excerpt: { type: String, required: true },
    author: {
        type: String,
        required: true
    },
    trailerVideoId: { type: String },
    trailerVideoPublicId: { type: String },
    trailerThumb: { type: String },
    body: [
        {
            type: { type: String, enum: ['p', 'h2'], default: 'p' },
            text: { type: String, required: true }
        }
    ],
}, {
    timestamps: true
})

const Post = mongoose.model("Post", postSchema);
export default Post;