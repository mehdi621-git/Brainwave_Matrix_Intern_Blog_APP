import axios from 'axios'
const url = 'http://localhost:7000'



export const imageUp =async (file)=>{
    try {
       const res = await axios.post(`${url}/file/upload`,file)
       return res;
       console.log(res)
    } catch (error) {
      
       console.log(error.message)
    }
 }