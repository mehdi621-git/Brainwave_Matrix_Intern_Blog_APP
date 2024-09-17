import grid from 'gridfs-stream'
import { GridFSBucket } from 'mongodb';
import mongoose from 'mongoose'
const url = 'http://localhost:7000'
const conn =mongoose.connection;
let gfs , gridfsbucket;
conn.once('open' , ()=>{
    gridfsbucket = new mongoose.mongo.GridFSBucket(conn.db , {
        bucketName : 'photos'
    }) 
    gfs = grid(conn.db , mongoose.mongo)
    gfs.collection('photos')
})
export const UploadImage =async (req,res)=>{
    console.log(req.data)
try {
    if(!req.file){
        return res.status(404).json({msg : 'Blog Image not exist' , error : error.message})
    }
    const imageUrl = `${url}/file/${req.file.filename}`
    return res.status(200).json({msg : "blog image found successfully" , imageUrl})
    
} catch (error) {
     return res.status(500).json({msg:"error while uploading image" , error :error.message})
}
  
}

export const getImage = async (req, res) => {
    try {
      const file = await gfs.files.findOne({ filename: req.params.filename });
  
      if (!file) {
        return res.status(404).json({ message: "File not found" });
      }
  
      const readStream = gridfsbucket.openDownloadStream(file._id);
      readStream.pipe(res);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while retrieving the image" });
    }
  };