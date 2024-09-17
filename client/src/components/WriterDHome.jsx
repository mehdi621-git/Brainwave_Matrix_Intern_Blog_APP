
import React from 'react'
import WriterPosts from "../generalcomponents/writerPosts";
import Divider from "../generalcomponents/Divider";
import WriterMakePost from "../generalcomponents/WriterMakePost";
const WriterDHome = () => {
  return (
  <>
    <div className="bg-slate-600 flex flex-col justify-center items-center  w-full md:w-[80%]  ">
        
      <WriterMakePost></WriterMakePost>
     {/* posts area */}
     <Divider></Divider>
     <WriterPosts></WriterPosts>
  
    </div>
    <div className="bg-black md:w-[20%] hidden md:block ">
      {/* blogs */}
    </div>
   </>
  )
}

export default WriterDHome