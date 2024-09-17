import axios from 'axios'

const url = 'http://localhost:7000'

export const fetchAllWriters =async()=>{
    try {
        const res = await axios.get(`${url}/fetchWriters`)
        console.log("the res is",res)
        return res;
    } catch (error) {
         console.log("error while fetching writers",error.message)
         
    }
}