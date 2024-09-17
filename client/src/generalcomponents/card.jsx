import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

import { htmlToText } from 'html-to-text';
const tranculatedText =(html,length)=>{
 const plainText = htmlToText(html)// Convert HTML to plain text
  console.log("tranc" ,plainText)
  return plainText.length > length ? plainText.slice(0, length) + '...' : plainText;
}
const Card = ({blogElements,sliceCount,writerimg}) => {
  const sanitizedDesc = DOMPurify.sanitize(blogElements?.desc || '');
 const trancutedDesc = tranculatedText(sanitizedDesc,sliceCount)
 console.log("cards",blogElements)
 const url = blogElements.picture ? blogElements.picture : "https://via.placeholder.com/150"
 const wurl = blogElements.wPic? blogElements.wPic : "https://via.placeholder.com/150"

  return (
   
    <div className={`max-w-64 lg:w-[230px] 2xl:w-[230px]  rounded overflow-hidden shadow-lg gap-3  md:m-2 lg:m-1 2xl:m-2  m-[9px]`}>
      <div className='flex flex-col items-center ' >
      <img className="w-full h-[150px] object-cover  " src={url} alt="Placeholder" />
      <p className='dark:text-white opacity-25 text-xs p-1'>{blogElements.category}</p>
      </div>
      
      <div className="px-6 py-2">
        
        <div className="font-bold text-xl mb-2 text-cyan-200">
            {blogElements?.title?.length > 30 ?blogElements?.title.slice(0,30) + '...' : blogElements?.title }
            </div>
        {/* <div className="dark:text-gray-400 text-base break-words overflow-hidden text-stone-950">
            {blogElements?.desc.length > 100 ?blogElements?.desc.slice(0,150) + '...' : blogElements?.desc }
    
        </div> */}
        <div
          className="dark:text-gray-400 text-base break-words overflow-hidden text-stone-950"
         
        >
          {trancutedDesc}
          </div>
       
      </div>
      <div className="px-[2px] pt-3 pb-2 mb-3">
        <Link to={`/blog?title=${blogElements?.title}&writerid=${blogElements?._id}`} className="bg-rose-500  opacity-40 hover:bg-rose-300  text-red-900 font-bold py-2 md:px-4 px-2  rounded">
          Read More...
        </Link>
      { writerimg && <div className='mt-3 flex blogElementss-center gap-3'>
            <img src={wurl} alt="placeholder " className='w-6 h-6 rounded-full object-cover' />
            <h2 className='dark:text-white font-bold text-sm text-black'>{blogElements?.userName}</h2>
        </div>}
      </div>
    </div>
   
  );
};

export default Card;

