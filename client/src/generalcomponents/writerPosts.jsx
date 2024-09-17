
import React from 'react'
import UserHeadline from './UserHeadline'

const WriterPosts = () => {
  return (
    <div className="w-full  flex flex-col centeralignWriterIn min-h-fit bg-white mt-3 rounded-md m-2 ">
    <div className='flex justify-between px-5 w-full py-1 '>
      <UserHeadline postdays={true}></UserHeadline>
      <div className='flex items-center'><button className='text-blue-500 hover:bg-blue-100 p-3 rounded-3xl font-extrabold'>+ Follow </button></div>
    </div>      
    {/* navbar ending | */}
    <p className='px-3 pt-1 m-2'>Hello world</p>
{/* users post */}
  </div>
  )
}

export default WriterPosts