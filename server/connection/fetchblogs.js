import blog from "../model/blog.js"

export const fetchingAllBlogs = async (req,res)=>{
     try { 
        const posts = await blog.find({})
        return res.status(200).json({posts})
     } catch (error) {
        return res.status(500).json({msg:"error while getting posts from backend",error : error.message})
     }
}

export const GetBlogforReading = async(req,res)=>{
   try {
      const writer = req.query.writerId;
      const blogs = await blog.find({userName:writer})
      return  res.status(200).json({
         success: true,
         message: "Blogs retrieved successfully",
         blogs,
       });
   } catch (error) {
     return res.status(500).json({
         success: false,
         message: "Error retrieving blogs",
         error: error.message,
       });
   }
}