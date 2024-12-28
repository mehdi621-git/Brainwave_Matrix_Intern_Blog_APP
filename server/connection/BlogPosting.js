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
export const addLike =async(req,res)=>{
          const {blogId ,userId} = req.body
      try {
          const blogFind = await blog.findById(blogId);
          if(!blogFind){
            return res.status(404).json({
                 msg : "No Blog Found"
            })
          }
          console.log("blogFound",req.body)
          const findAlreadyLiked = blogFind.like.some((like)=>like.userId.toString() == userId);
          if(findAlreadyLiked){
            return res.status(400).json({
                  msg : "You have Already Liked"
             })
          }
          console.log("iam fine")
          blogFind.like.push({ userId });
          await blogFind.save();
          console.log("till me")
          return res.status(200).json({
            msg : "Liked",
            count :blogFind.like.length,
       })
      } catch (error) {
         res.status(500).json({msg : "Error While Liking the Blog"})
      }
}