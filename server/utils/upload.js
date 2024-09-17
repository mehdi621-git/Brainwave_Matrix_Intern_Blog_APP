//middleware


import { request } from 'express'
import { trusted } from 'mongoose'
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
  url: 'mongodb://localhost:27017/blog_app',
  options: { useNewUrlParser: true, useUnifiedTopology: true }, // Added useUnifiedTopology for connection stability
  file: (req, file) => {
    const match = ['image/png', 'image/jpeg', 'image/jpg'];

    // Corrected to file.mimetype
    if (match.indexOf(file.mimetype) === -1) {
      return `${Date.now()}-blog-${file.originalname}`
    }
     console.log("still no wero")
     console.log(file,"req" +req)
    return {
      bucketName: 'photos', // Corrected to bucketName
      filename: `${Date.now()}-blog-${file.originalname}`
    };
  }
});
storage.on('connection', (db) => {
  console.log('Connected to MongoDB GridFS successfully');
});

storage.on('connectionFailed', (err) => {
  console.error('Failed to connect to MongoDB GridFS:', err);
});

// Exporting multer with the configured storage
export default multer({ storage });
