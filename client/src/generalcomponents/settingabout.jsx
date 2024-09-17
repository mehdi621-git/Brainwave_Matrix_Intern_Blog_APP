
import React, { useState } from 'react'
import Button from './button'

const Settingabout = () => {
  const [value,setvalue]=useState('abcbbb')

  const handleChange =(e)=>{
    setvalue(e.target.value)
  }

  return (
    <div>
        <label htmlFor="About" className='text-white'>About Me</label>  
         <textarea placeholder = 'abc' rows = {12} name="About" id="" value={value} onChange={(e)=>handleChange(e)} className='placeholder-gray-500 w-full bg-transparent resize-none  border border-[#E0E0E0] rounded-lg py-2 outline-none text-black dark:text-white px-2' ></textarea>
         <label htmlFor="About" className='text-white'>Previous</label>
         <textarea placeholder = 'abc' rows = {12} name="About" id="" className='placeholder-gray-500 w-full bg-transparent resize-none  border border-[#E0E0E0] rounded-lg py-2 outline-none text-black dark:text-white px-2' value={"jdbnj"}></textarea>
    </div>
  )
}

export default Settingabout