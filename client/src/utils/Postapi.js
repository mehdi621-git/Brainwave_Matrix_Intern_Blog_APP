import axios from 'axios'
import { getTokens } from './tokens';
const url = 'http://localhost:7000'
export const Post = async (data) => {
    const token = getTokens()
    try {
      const res = await axios.post(`${url}/posting`, data, {
        headers: {
          'Authorization': `Bearer ${token}`, // Replace `yourToken` with the actual token
        }
      });
      return res.data; // Return the response data if needed
    } catch (error) {
      console.error("Error occurred during posting:", error);
      // Handle the error appropriately
      throw error; // Re-throw the error if you want to handle it outside
    }
  };