import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { FetchBlogs } from '../utils/fetchBlog';
import { LikeBlog } from '../utils/Like';
import { Context } from '../context';

const ReadingArea = () => {
    const [description,setDes] =useState('')
    const [like,setLike] =useState(0);
    const location = useLocation();
    // Extract query parameters
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get("title");
    const writerId = searchParams.get("writerName");
    console.log(title,writerId)
const {user} =useContext(Context)
    useEffect( ()=>{
        const fetchingBlogs = async() =>{

        
         const res=await FetchBlogs({writerId:writerId})
         console.log(res) 
         
         const des = res.data.blogs.filter((item)=> item.title == title)
         console.log("t",des)
         setDes(des[0])
         setLike(des[0].like?.length)
        }
        fetchingBlogs()
    },[like])
    const handleLikeButton=async ()=>{
        const liked = await  LikeBlog({userId : user.id , blogId : description._id})
console.log(liked)
setLike(liked.data.count)

        if(liked.response.status ==400){
            alert(liked.response.data.msg)
        }
    }
  return (
   
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Blog Header */}
      <div className="flex flex-col  mb-4">
        {/* Blog Title */}
        <img src={description.picture} alt="" className='h-40 object-contain' />
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Like and Share Buttons */}
        <div className="flex space-x-3">
          <button onClick ={handleLikeButton}className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Like 👍 {like}
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Share 🔗
          </button>
        </div>
      </div>

      {/* Author Section */}
      <div className="flex items-center mb-6">
        {/* Author Image */}
        {/* <img
          src={authorImage}
          alt={`${authorName}`}
          className="w-12 h-12 rounded-full object-cover mr-4"
        /> */}

        {/* Author Details */}
        <div>
          {/* <p className="text-gray-800 font-medium">{authorName}</p> */}
          {/* <p className="text-gray-600 text-sm">{new Date(date).toLocaleDateString()}</p> */}
        </div>
      </div>

      {/* Blog Content */}
      <div className="text-gray-800 leading-relaxed">
        <p  dangerouslySetInnerHTML={{ __html: description.desc }} ></p>
      </div>
    </div>
  );
};

export default ReadingArea