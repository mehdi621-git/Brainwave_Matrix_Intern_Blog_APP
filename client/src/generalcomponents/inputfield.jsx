
import React, { useContext } from 'react'
import { Context } from '../context'

const Inputfield = ({labelfor , placeholder , labelname ,inputType ,icon ,onchange,textcolor,borderC,value}) => {
  const {eye,seteye} =useContext(Context)
    return (
   <>
       <div className={`w-full h-2/4 flex flex-col justify-start ${textcolor || 'dark:text-gray-600'} text-blue-700`}>
        <label htmlFor={labelfor} className={''}>{labelname}</label>
         <div className='flex w-full justify-between '>
         <input  onChange = {onchange}className = {`placeholder-gray-500 w-full bg-transparent h-full border ${borderC || 'border-gray-600'} rounded-lg py-2 outline-none text-black dark:text-white px-2`} type={inputType} name={labelfor} value = {value} placeholder={placeholder} />
         {icon && <span className='relative right-8 top-3 hover:cursor-pointer ' onClick={()=>seteye(!eye)}>{icon}</span>}
         </div>
       </div>
   </>
  )
}

export default Inputfield