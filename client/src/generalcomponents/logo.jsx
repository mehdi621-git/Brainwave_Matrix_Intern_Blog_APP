
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({type}) => {
  return (
    <div>
        <Link to={'/'} className={`text-2xl font-semibold dark:text-white 
   ${type && "text-white text-3xl font-semibold"} `}>
           Winkle
           <span className={`text-2xl text-purple-700 font-bold ${type && "text-white text-5xl font-bold"}`}>
            Blog
           </span>
        </Link>
    </div>
  )
}

export default Logo;