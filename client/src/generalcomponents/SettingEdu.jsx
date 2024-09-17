
import React, { useState } from 'react'
import Inputfield from './inputfield'
import Divider from './Divider'
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
const initialValues ={
    School : '',
    Degree :'',
    Field:'',
    Description :'',
}
const SettingEdu = () => {
    const [edu,setedu] =useState([initialValues])
    const handlechange =(index,e)=>{
        const {name,value} =e.target;

        // const newedu = [...edu]
        // newedu[index][name] =value
        // console.log(index)
        // console.log("n",newedu)
        // console.log(edu[index].School)
        setedu(prevEdu => {
          const newEdu = [...prevEdu];
          newEdu[index] = { ...newEdu[index], [name]: value };  // Correctly update the specific item
          return newEdu;
        });
      
    
         
    }
    const handleDelete=(index)=>{
          const newedu = edu.filter((_,i)=> i!== index)
          console.log(index)
          // console.log(newedu)
          setedu(newedu)
    }
const handleadd =()=>{
  setedu(prevalue=>[...prevalue,initialValues])
}
    console.log(edu)
  return (
    <div className=''>
        {edu.map((item,index)=>
       
         <div className='border-[#E0E0E0] p-2 rounded-xl  mb-2'>
          <MdDelete color={'red'} className='float-right hover:cursor-pointer' size={20} onClick={()=>handleDelete(index)}/>
           
          
         <Inputfield borderC='border-[#E0E0E0]' labelfor={'School'} labelname={'School'} inputType={'text'} textcolor={'text-white'} placeholder={'abc'} value={item.School} onchange={(e)=>handlechange(index,e)}/>
         <Inputfield borderC='border-[#E0E0E0]' labelfor={'Degree'} labelname={'Degree'} inputType={'text'} textcolor={'text-white'} placeholder={'abc'}value={item.Degree} onchange={(e)=>handlechange(index,e)}/>
         <Inputfield borderC='border-[#E0E0E0]' labelfor={'Field'} labelname={'Field'} inputType={'text'} textcolor={'text-white'} placeholder={'abc'} value={item.Field} onchange={(e)=>handlechange(index,e)}/>
         <label htmlFor="Description" className='text-white '> Description</label>
         <textarea placeholder = 'abc' rows = {5} name="Description" id="" className='placeholder-gray-500 w-full bg-transparent resize-none  border  rounded-lg py-2 border-[#E0E0E0] outline-none text-black dark:text-white px-2' value={item.Description} onChange={(e)=>handlechange(index,e)}></textarea>
        
            <div className='m-2'>
            <Divider></Divider>
            </div>
          
     </div>)}
     <IoMdAddCircle className='float-right m-3 hover:cursor-pointer' color={'#12ed12'} size={30} onClick={handleadd}/>
  
      <Divider></Divider>
    </div>
  )
}

export default SettingEdu