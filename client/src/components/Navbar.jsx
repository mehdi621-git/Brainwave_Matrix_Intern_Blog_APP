
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context'
import { MdHome } from "react-icons/md";
import { TbWriting } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";

const Navbar = () => {
  const {user} =useContext(Context)
  console.log(user)
  return (
    <div className='w-full flex justify-end'>
      <div className='w-[60%] justify-between flex mx-6'>
        <div className ='flex gap-12 text-white mt-2 mb-0 '>
        <Link to='/home' ><MdHome size={25} color='white'/></Link>
        <Link to='/write' ><TbWriting size={25} color='white'/>
        </Link>
        <Link to={`/writerDetail/${user.id}`} ><CgProfile size={25} color='white'/></Link>
          <Link to='/setting'  ><IoIosSettings size={25} color='white'/>
          </Link>

        </div>
        <div className='text-white'>
        {/* <h1>a</h1> */}

        </div>
      </div>
    </div>
  )
}

export default Navbar
