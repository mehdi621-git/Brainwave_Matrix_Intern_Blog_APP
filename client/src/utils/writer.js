import axios from "axios";

export const writercards = async (id) => {
    const url = 'http://localhost:7000'
    console.log(id);
  
    try { 
      const res = await axios.get(`${url}/writercards/${id}`);
      
      // Logging and returning the actual response data
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error.message);
  
      // Optionally, you could throw the error to handle it elsewhere
      throw error;
    }
  };
  