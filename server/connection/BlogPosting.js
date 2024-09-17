import blog from "../model/blog.js"


export const postTheBlog =async(req,res)=>{
 
      try {
          const post = new blog(req.body)
     post.save()
     return res.status(200).json({msg : "Successfully Posted"})
      } catch (error) {
         res.status(500).json({msg : "Error While Posting Blog"})
      }
}