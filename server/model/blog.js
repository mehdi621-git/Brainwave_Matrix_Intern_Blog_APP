import mongoose from "mongoose";


const blogSchema = mongoose.Schema({
    title : {
        type : String,
        require : true,
        
    },
    desc : {
        type : String,
        require :true,
    },
    email : {
        type : String,
        require :true,
    },
    picture : {
        type : String,
        require :true,
    },
    category: {
        type : String,
        require :true,
    },
    createdDate :{
        type : String,
        require :true,
    },
    userName :{
        type : String,
        require :true,
    },
    wPic :{
    type : String,
    }
})
const blog =  mongoose.model('posts',blogSchema)
export default blog