
import React from 'react'
import { Link } from 'react-router-dom'

const Indication = ({label,labelaction,link,styles}) => {
  return (
    <div className={`flex gap-4 ${styles}`}>
        <p className='width-full dark:text-white '>{label}</p>
        <Link to = {link} className='text-blue-600 underline '>{labelaction}</Link>
    </div>
  )
}

export default Indication