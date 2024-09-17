import axios from'axios'
const url = 'http://localhost:7000'
export const contactGroup =async (data)=>{
    try {
        const res = await axios.post(`${url}/groupContact`,data)
        return res
      
    } catch (error) {
        const err = error.response
        return err
    }
      
}
export const fetchmessage =async (data)=>{
    try {
        const res = await axios.get(`${url}/getConversation`, {
            params: {
              sender: data.sender,
              writer: data.writer,
            },
          });
          
          return res
    } catch (error) {
        const err = error.response
        return err

    }
}
