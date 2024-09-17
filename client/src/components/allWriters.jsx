import React, { useEffect } from 'react'
import Card from '../generalcomponents/card'
import { fetchAllWriters } from '../utils/fetchwriters'

const AllWriters = () => {

    useEffect(()=>{
        getallWriter=async()=>{
          res = await fetchAllWriters()
          console.log("The All Writers are",res.data)
        }
        getallWriter()
    })
  return (
    <div>
        <Card></Card>
    </div>
  )
}

export default AllWriters