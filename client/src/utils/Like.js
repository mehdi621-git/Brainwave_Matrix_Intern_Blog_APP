import axios from 'axios'
const url = 'http://localhost:7000'
export const LikeBlog = async (data) => {
    try {
      const res = await axios.post(`${url}/addlike`, data);
      return res; // Return the response data if needed
    } catch (error) {
      console.error("Error occurred during posting:", error);
    return error// Re-throw the error if you want to handle it outside
    }
  };