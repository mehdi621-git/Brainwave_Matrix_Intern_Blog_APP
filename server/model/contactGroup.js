import mongoose from "mongoose";


const ContactG = mongoose.Schema({
    members: {
        type: [String], // An array of user IDs (strings) representing the two participants
        required: true,
      },
      messages: [
        {
          sender: {
            type: String, // User ID of the sender
            required: true,
          },
          content: {
            type: String, // The actual message content
            required: true,
          },
          timestamp: {
            type: Date,
            default: Date.now, // Timestamp of when the message was sent
          },
        },
      ],
})
const group = mongoose.model('ContactGroup',ContactG)
export default group;