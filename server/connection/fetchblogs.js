import blog from "../model/blog.js"

export const fetchingAllBlogs = async (req,res)=>{
     try { 
        const posts = await blog.find({})
        return res.status(200).json({posts})
     } catch (error) {
        return res.status(500).json({msg:"error while getting posts from backend",error : error.message})
     }
}