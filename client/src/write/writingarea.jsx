import Button from '../generalcomponents/button';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { BiSolidImageAdd } from 'react-icons/bi'; // Ensure you have this icon imported
import { FaUnderline } from "react-icons/fa6";
import { FaFont } from "react-icons/fa";
import { MdFormatBold } from "react-icons/md";
import { RxFontItalic } from "react-icons/rx";
import { AiOutlineFontColors } from "react-icons/ai";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DropDown from '../generalcomponents/DropDown';
import { Context } from '../context';
import { API } from '../utils/docapi';
import {imageUp} from '../utils/imagesapi'
import Spinner from '../generalcomponents/Spinner';
import { Post } from '../utils/Postapi';
const initialPost ={
  email : '',
  userName :'',
  title : '',
  desc : '',
  picture : '',
  category : 'Music',
  wPic : '',
  createdDate : new Date()
}

const WritingArea = () => {
  const [spinner,setspinner] =useState(false)
  const{selectCa,user}=useContext(Context)
  const [post ,setpost] =useState(initialPost)

    
      const [file,setfile] =useState(null)
       const handleChange =(e)=>{
        
        //setvalue(e)
        setpost({...post , desc : e})
        console.log(post)
       }  
       useEffect(()=>{
           setpost({...post,category:selectCa})
           
       },[selectCa])
       const handlePost = (e)=>{
          const {name,value} =e.target;
          setpost({...post,[name]:value})
          console.log(post)
       }
     const  handleImage =(e)=>{
                  console.log(e.target.files)
                  setfile(e.target.files[0])
                  if (file) {
                    console.log(file); // This should log the File object
                  } else {
                    console.log("No file selected");
                  }
                
       }
       useEffect(()=>{
        const getImage =async()=>{
         console.log("user si ",user)
                if(file){
                  setspinner(true)
                  const ImageForm = new FormData();
                  ImageForm.append('name',file.name)
                  ImageForm.append('file',file)
                  // for (let [key, value] of ImageForm.entries()) {
                  //   console.log(`${key}: ${value}`);
                  // }
                  console.log(ImageForm)
                 // const res = await API.uploadBImage(ImageForm)
                  const res =await imageUp(ImageForm) 
                 // const rew =await API.up(ImageForm)
                 // console.log(res)
                 setpost({...post , picture :  res.data.imageUrl })
                //  post.picture = res.data.imageUrl
                 setspinner(false)
                 console.log(res.data)
                 console.log(post.category)
                }
              }
              getImage();
              console.log(user)
              if(!post.email){
                setpost({...post , email : user.email , userName : user.email , wPic : user.writerPic})
              // post.email =user.email;
              // post.userName=c
              }

       },[file])
       const Validate = post.picture && post.title && post.desc && post.category;
       
    console.log(Validate)
    let url =post.picture  ?post.picture : "https://via.placeholder.com/150"
    const handleSubmit =async(e)=>{
      e.preventDefault()
     
    
             const res = await Post(post)
         
             console.log(res.status)
      
             
    }
  return (
   
    <div className="w-full min-h-screen flex flex-col items-center md:p-8 p-3 lg:p-9 2xl:p-10 md:px-40 px-4 gap-3 ">
       
      <div className="w-full flex flex-col items-center justify-center  md:h-[300px] h-[200px] rounded-lg">
      
        <img src={url} alt="" className="w-full h-full object-fill rounded-lg" />

        <label className='absolute w-28 h-28 flex justify-center items-center rounded-full bg-slate-400 cursor-pointer  hover:bg-slate-600' htmlFor="file" >
       {spinner && <Spinner styles = {'w-32 h-32'}></Spinner>}
        <BiSolidImageAdd className=" size-11  " />
        </label>
        <input type="file" className = "hidden" id = 'file' name='file' onChange={handleImage} accept=".jpg, .jpeg, .png"/>
      </div>
      {/* { <div className='w-full h-[40px] bg-transparent rounded-lg flex gap-3 items-center pl-3' >

           
       
      
        {/* Additional content goes here */}
      {/* </div>  */}
 {/* */} 
      <form action="" className='w-full flex flex-col  ' onSubmit={(e)=>handleSubmit(e)}>
        <div className='w-full flex justify-end items-center'>
          <DropDown></DropDown>
        <Button label={"Publish"} disabled={!Validate} styles = 'w-[100px] bg-blue-500 p-2 m-2 float-right' type={'submit'}></Button>
        </div>
     
            <div className='w-full flex flex-col gap-3 '>
                <input type='text' placeholder='Title goes here ...' className='outline-none p-2 text-lg font-semibold rounded-md' name='title' onChange={(e)=>handlePost(e)}/>
                <ReactQuill theme="snow" value={post.desc} onChange={handleChange}  className='bg-[rgb(246,235,235)] ' />
            </div>
        </form>
    </div>
  );
}

export default WritingArea;
