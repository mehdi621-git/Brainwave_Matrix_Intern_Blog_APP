import React, { useContext, useEffect, useState } from 'react'
import Card from '../generalcomponents/card'
import { Context } from '../context'
import { writercards } from '../utils/writer';

const WriterDBlog = () => {
  const {writerBlogs} =useContext(Context)
   console.log("From writer blogs,",writerBlogs)
 
  return <>
  <div className='w-full flex flex-wrap justify-center items-center p-3 gap-3'>
    {
      <h1>h3eello</h1>
      // writerBlogs.map((item)=><Card blogElements ={item} sliceCount={40} ></Card>)
      
    }
      
      
      </div>
      
  </>
}

export default WriterDBlog