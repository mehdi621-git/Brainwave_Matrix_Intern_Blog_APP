
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context'
const Navbar = () => {
  const {user} =useContext(Context)
  console.log(user)
  return (
    <div className='w-full flex justify-end'>
      <div className='w-[60%] justify-between flex mx-6'>
        <div className ='flex gap-12 text-white '>
        <Link to='/home' >a</Link>
        <Link  >a</Link>
        <Link to={`/writerDetail/${user.id}`}>a</Link>
          <Link to='/setting' >a</Link>

        </div>
        <div className='text-white'>
        <h1>a</h1>

        </div>
      </div>
    </div>
  )
}

export default Navbar
