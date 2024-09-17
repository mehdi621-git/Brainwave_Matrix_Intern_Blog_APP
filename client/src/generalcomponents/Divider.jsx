import React from 'react'

const Divider = ({label,styles}) => {
  return (
      <div className={`w-full flex items-center text-justify  `}>
        <div className={`${label ? 'w-2/6' : 'w-full'}   border-t border-gray-500 `}>   
        </div>
        <p className= {`text-gray-500  ${label ?'w-2/5 mx-5 md:mx-7' :'w-0'}  tracking-tighter`}> {label }</p>
        
         <div className={`${label ? 'w-2/6' : 'w-full'} flex flex-row border-t border-gray-500 ${styles}`}></div>
      </div>
  )
}

export default Divider