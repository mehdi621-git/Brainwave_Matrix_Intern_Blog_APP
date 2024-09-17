import axios from 'axios'
const url = 'http://localhost:7000'
export const saveGoogleAuth = async(data)=>{
     try {
        console.log(data)
       const res=await axios.post(`${url}/saveuserG`,{data})
       return res
     } catch (error) {
        console.log("error while saving user G data",error.message)
        return error
     }
}
export const searchGoogleAuth=async (data)=>{
         try {
              const res = axios.post(`${url}/searchuserG`,{data})
              return res;
         } catch (error) {

             console.log('error while searching user data',error.message)
               return error
         }
}
export const saveUserM = async(data)=>{
   try {
    const  res = await axios.post(`${url}/saveuserM`,{data})
      return res;
   } catch (error) {
       return error
   }
}
export const searchM =async (data)=>{
      try {
         const res =await axios.post(`${url}/searchM`,{data})
         console.log(res)
         return res
      } catch (error) {
           console.log(error)
           console.log(error)
           return error
      }
}
