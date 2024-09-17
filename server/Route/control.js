import express from 'express'
import { SavingAndVerifyingGAuth, SavingAndVerifyingM, verifyingG, verifyingM } from '../connection/authentication.js';
import upload from '../utils/upload.js'
import { UploadImage , getImage } from '../connection/uploadImage.js';
import { authorization } from '../utils/authorization.js';
import { postTheBlog } from '../connection/BlogPosting.js';
import { fetchingAllBlogs } from '../connection/fetchblogs.js';
import { fetchingWriterCards, fetchingWriters } from '../connection/writersFetch.js';
import { buildingGroupsForContact, GettingContactMessages } from '../connection/contactGroup.js';
const route = express.Router();
//const setupRoutesApi =(io)=>{


route.post('/saveuserG',SavingAndVerifyingGAuth);
route.post('/searchuserG',verifyingG)
route.post('/saveuserM',SavingAndVerifyingM)
route.post('/searchM',verifyingM)
route.post('/file/upload' ,upload.single('file') , UploadImage)
route.get('/file/:filename', getImage);
route.post('/l',(req,res)=>{
    console.log(req.body)
})
route.post('/posting',postTheBlog) 
route.get('/blogs',fetchingAllBlogs)
route.get('/fetchWriters', fetchingWriters)
route.get('/writercards/:id',fetchingWriterCards)
route.post('/groupContact',buildingGroupsForContact)

route.get('/getConversation',GettingContactMessages)
//return route
//}
export default route;