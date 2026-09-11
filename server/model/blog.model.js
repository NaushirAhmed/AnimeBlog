import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
    title :{
        type : String ,
        required :true
    },
    image :{
        type : String ,
        required :true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'   
    },
    excerpt:{
        type : String ,
        required :true
    },
    author :{
        type : String ,
        required :true
    },
    trailerVideoId :{
        type : String ,
        required :true
    },
    trailerThumb:{
        type : String ,
        required :true
    },
    body: [
        {
            para1 :String,

            
        },
        {
            para2 : String
        }
      ],


},{
    timestamps :true
})

const Post = mongoose.model("Posts",postSchema);