

import React, { useEffect, useRef, useState } from 'react'
import SkillsDiv from './skilldiv'

const WriterDAboutSk = () => {
  const maindivW =useRef(null)
  const [maindiv,setmaindiv] = useState(0)
  useEffect(()=>{
       if(maindivW.current){
              setmaindiv(maindivW.current.offsetWidth)
       }
  },[])
  return (
    <>
    <div className='w-full flex  flex-col'>
    <label> HTML</label>
    <div className='flex gap-2'>
    <div className='w-full bg-white   my-2' ref={maindivW}>
      <div className='w-fit flex'>
        <SkillsDiv mainDivWidth={maindiv} percent={90}></SkillsDiv>
        {/* <div className='w-2 h-2 relative bg-slate-600'></div>
        <div className='w-2 h-2 relative bg-slate-600'></div>

        <div className='w-2 h-2 relative bg-slate-600'></div> */}
        </div>
    </div>
    <p>2%</p>
    </div>
    </div>
   </>
  )
}

export default WriterDAboutSk