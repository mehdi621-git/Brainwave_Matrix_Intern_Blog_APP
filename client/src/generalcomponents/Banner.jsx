
import React, { useContext, useEffect, useState } from 'react'
import { htmlToText } from 'html-to-text';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import { BiSolidImageAdd } from 'react-icons/bi';
import { Context } from '../context';
const tranculatedText =(html,length)=>{
 const plainText = htmlToText(html)// Convert HTML to plain text
  console.log("tranc" ,plainText)
  return plainText.length > length ? plainText.slice(0, length) + '...' : plainText;
}
const Banner = ({BBlog ,mainImgw , intro,overflowimg,maindiv , bannerImg,type}) => {
  const {perUserDetail} =useContext(Context)
  const [screenwidth,setscreenwidth] =useState(window.innerWidth < 768 ?25:100)
  const sanitizedDesc = DOMPurify.sanitize(BBlog?.desc || '');
  useEffect(()=>{
    const handleresize =()=>{

    
    if(window.innerWidth < 768){
      setscreenwidth(25)
    }else{
      setscreenwidth(100)
    }
  }
    window.addEventListener('resize',handleresize)
    handleresize()
    return () => window.removeEventListener('resize', handleresize);
  },[window.innerWidth])
  
 
 const trancutedDesc = tranculatedText(sanitizedDesc,screenwidth)
  console.log("banner",BBlog)
  const url = BBlog?.picture || "https://via.placeholder.com/150"
  let wurl = ''
   if(type == 'home'){

   wurl = BBlog?.wPic || "https://via.placeholder.com/150"

  }else{
    wurl = perUserDetail.writerPic ||"https://via.placeholder.com/150"
  }
  const date = new Date(BBlog?.createdDate).toDateString();

  return (
    <div className={`md:w-[85%] w-[95%]  ${maindiv} bg-gray-500 rounded-lg border-spacing-2 shadow-lg items-end flex`}
    style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 1.5)' }}
    >
        {bannerImg && <><label htmlFor="bannerImg" className='absolute hover:cursor-pointer w-fit'><BiSolidImageAdd className=" size-11 " color='snow' />
        
        </label>
        <input type="file" className='hidden'  id='bannerImg' accept=".jpg, .jpeg, .png"/>
        </>
        }
        <div className={`${mainImgw} h-full flex   `} >
      
    <img
      src={url}
      alt="Placeholder"
      className="h-full w-full object-cover rounded-lg"
      style={{ boxShadow: '10px 20px 30px rgba(0, 0, 0, 0.5)' }}
    />
   
    <div className={`absolute flex flex-col items-center `}>
      <img src={wurl} alt="writer Image" className={`${overflowimg} rounded-full `} />
        <p className='rounded-lg font-extrabold'>{BBlog?.userName}</p>
    </div>
     </div>
{  intro &&  <div
      className=" h-full w-2/6  border-gray-300 rounded-lg p-3 md:p-5 gap-3 "
      placeholder="Enter your text here..."
    >
      <div>
        <h1 className='font-extrabold text-cyan-200 leading-snug text-sm md:text-lg '>{BBlog?.title}</h1>
        <div className=' gap-2'>
          <div className='flex items-center'>
          <img src={wurl} alt="writer Image" className='w-5 h-5 rounded-full ' />
          <p >{BBlog?.userName.length > 7 ?BBlog?.userName.slice(0,7) + "..." :BBlog?.userName}</p>
          </div>
          <p className='text-xxs  text-gray-900' >{date}</p>
         
        </div>
        <div>
          <p className='font-medium leading-none md:leading-5 mt-2 mb-3
          '>{trancutedDesc}</p>
          <Link to={`/blog?title=${encodeURIComponent(BBlog?.title)}&writerName=${BBlog?.userName}`}  className="bg-blue-500  opacity-90 hover:bg-rose-800  text-amber-500 font-bold    rounded">
          Read More...
        </Link>
        </div>
      </div>
    </div>}
 
 </div>
  )
}

export default Banner