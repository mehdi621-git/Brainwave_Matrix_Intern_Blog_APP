import React from 'react'
import SectionElements from '../utils/general.js/settingsec'
import Divider from '../generalcomponents/Divider'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import Button from '../generalcomponents/button'


const Setting = () => {
  return (
    <div className="min-h-screen w-full  md:p-5 2xl:p-8  p-4 justify-center items-center ">
        <div className ='bg-gray-600 w-full min-h-screen p-5 flex' style={{ boxShadow: '10px 10px 5px rgba(1, 0, 0, 1.5)' }}>
            <div className='w-[30%]  bg-[#2C3E50]  flex flex-col p-1' >
                {SectionElements.map((item)=><> <Link to={`/setting/${item}`} className='hover:cursor-pointer hover:bg-[#34495E] text-white p-2 rounded-md font-extrabold my-1'>{item} </Link> <Divider></Divider></>)}
               < Button label={'Save'} styles ={'text-white bg-green-500 p-1 rounded-xl m-1'}></Button>
                
            </div>
            <div className=' bg-gradient-to-r from-[#34495E] via-slate-700 to-[#34495E] w-full'>
              <div className='w-full bg-[#4A90E2] p-2 md:p-[15px] flex justify-end  '>
                <img src="" alt="" className='w-12 h-12 rounded-lg ' />
              </div>
              <div className='m-2  rounded-sm p-1'>
                <Outlet></Outlet>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Setting