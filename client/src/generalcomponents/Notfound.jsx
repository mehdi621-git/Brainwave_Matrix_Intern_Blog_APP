
import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (

    <div className="flex justify-center items-center h-screen  flex-col gap-7">
      <h1 className="text-4xl font-bold dark:text-white">404 - Page Not Found</h1>
      <Link to={'/home'} className='text-blue-600 underline'>Move to home</Link>
    </div>
  )

}

export default Notfound