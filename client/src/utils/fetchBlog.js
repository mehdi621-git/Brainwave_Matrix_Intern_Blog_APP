import axios from "axios";

const url = 'http://localhost:7000'
export const FetchBlogs = async(data)=>{
     try {
        console.log(data)
       const res=await axios.get(`${url}/fetchBlog`,{
        params:data
       })
       console.log(res)
       return res
     } catch (error) {
        console.log("error while Getting Relevant Blog ",error.message)
        return error
     }
}