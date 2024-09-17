import mongoose from "mongoose"
import user from "../model/AuthModel.js"
import blog from "../model/blog.js"

import { ObjectId } from "mongodb"
export const fetchingWriters =async(req,res)=>{
    try {
         const writers =await user.find({},'name writerPic _id')
        //  const nameArray = writers.map((user)=> user.name)
        //  const picArray =writers.map((user)=> user.writerPic)
        //  const idArray = writers.map((user)=>user._id)
        //  console.log(writers)
        //  console.log(picArray)
        //  console.log(idArray)
         return res.status(200).json({writers: writers})
    } catch (error) {
        return res.status(500).json({msg:"error while getting writers" ,error:error.message})
    }
}

export const fetchingWriterCards=async(req,res)=>{
    const id =req.params.id
    console.log(",,",id)
  
    try {
    
        
        // Find the document by ObjectId
        const Record = await user.findById(id);
        const userRecord = await blog.find({email :Record.email })
        console.log(userRecord)
         
      console.log(Record)
        if (userRecord !=null) {
          return res.status(200).json({userRecord : userRecord , userDetail:Record})
        } else {
          console.log('No user found with that email.');
          return res.status(204).json({msg:"Sorry No Data avaliable"})
      
    }
    } catch (error) {
        console.log(error.message)
      return res.status(500).json({msg: "internal server error",error : error.message})
    }
}