import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    name:{
        type : String,
        required :true
    },
    categoryImage :{
        type : String,
        required : true,
    }},{
        timestamps : true
})

const category = mongoose.Model("Category",categorySchema)

export default category;