import mongoose from "mongoose"

const Connection = async ()=>{
    const url = 'mongodb://localhost:27017/blog_app'
    try {
        await mongoose.connect(url ,{useNewUrlParser : true})
        console.log("Database Connected")
    } catch (error) {
        console.log("Error while connecting database",error.message)
    }
}
export default Connection;