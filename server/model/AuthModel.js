import mongoose from "mongoose";


const AuthModel =new mongoose.Schema({
  googleId: {
    type: String,
    
    default : "12345"  // Indexes null values separately, allowing non-null values to be unique
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    default : "winkle"+Math.floor(Math.random()*1000),
  },
  writerPic: {
    type: String,
    default : "hello"
  },
  password: {
    type: String,
  },
    });
    const user =mongoose.model( "GAuth" , AuthModel)
    export default user;
