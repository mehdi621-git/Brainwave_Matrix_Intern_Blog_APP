
import React, { useContext } from 'react'
import { Context } from '../context'
import { Link } from 'react-router-dom'

const WriterArea = React.memo(() => {
  const {writersChunk} =useContext(Context)
  console.log("chunk",writersChunk)
  //  const {names,pics,id} = writersChunk
    let newwritersChunk = []; 

   // Ensure pics exists and has a length
   if (writersChunk && Array.isArray(writersChunk) && writersChunk.length > 0) {
     for (let i = 0; i < 5; i++) {
       let number = Math.floor(Math.random() * writersChunk.length);
       newwritersChunk[i] = writersChunk[number];
     }
   } else {
     console.error("Pics array is undefined or empty.");
   }
   
  console.log("chunking",writersChunk)
  //  console.log(newpic)
  //  console.log(names)
  return (
    <div className="flex flex-col w-fit 2xl:w-full "  >
    <h2>Writers</h2>
    <div className="flex gap-2 flex-wrap md:flex-col flex-row ">
      {" "}
      <div className="flex md:flex-col flex-wrap gap-1    ">
      {writersChunk&& writersChunk.length > 0  ? (
   newwritersChunk.map((item, index) => (
      <div key={index} className="flex  items-center gap-2 border-2 border-black p-1 rounded-md">
        <img
          src={item.writerPic || "https://via.placeholder.com/150"}
          className="w-4 h-4 object-contain rounded-full"
          alt={`pic-${index}`}
        />
        <Link to={`/writerDetail/${item._id}`} className='font-semibold overflow-hidden'>{item.name.length > 6 ? item.name.slice(0,6) + "..." : item.name || 'No name available'}</Link>
      </div>
    ))
  ) : (
    <p>No data available</p>
  )}
      
      </div>
     
    </div>
  </div>
  )
})

export default WriterArea