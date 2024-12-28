import React, { useEffect, useState } from 'react'
import Card from '../generalcomponents/card'
import { fetchAllWriters } from '../utils/fetchwriters'

const AllWriters = () => {
   const [allwrit, setallwrit ] = useState([])
    useEffect(()=>{
      const getallWriter=async()=>{
         const res = await fetchAllWriters()
         setallwrit(res.data.writers)
          console.log("The All Writers are",res.data)
        }
        getallWriter()
    },[])
  return (
    <div className='grid md:grid-cols-5 m-9 grid-cols-3'>
    
       {
        allwrit.map((item,index)=> <Card key={index} blogElements={item}></Card>)
       }
      
    </div>
  )
}

export default AllWriters