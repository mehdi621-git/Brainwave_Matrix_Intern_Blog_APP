import React, { useContext } from 'react'
import { Context } from '../context'

const UserHeadline = ({postdays}) => {
  const {perUserDetail} =useContext(Context)

  const url = perUserDetail.writerPic
  return (
    <div className='flex  items-center gap-3'>
        <img src={url} alt="" className="postimagesize rounded-full p-1 bg-black" />
        <div className="">
  <h2 className="font-bold m-0 pt-[1px]">{perUserDetail.name}</h2>
  <p className="text-gray-600 text-sm ">Position</p>
 {postdays && <p className="text-gray-600   text-xs">posted days ago</p>}
</div>
</div>
  )
}

export default UserHeadline