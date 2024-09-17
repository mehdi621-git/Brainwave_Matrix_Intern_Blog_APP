import axios from 'axios'

const url = 'http://localhost:7000'

export const fetchAllPosts = async   ()=>{
    try {
        const res  = await axios.get(`${url}/blogs`)
        return res;
    } catch (error) {
        console.log("Error from frontend",error.message)
          throw error;
    }
      
}