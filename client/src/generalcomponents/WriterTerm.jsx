
import React from 'react'
import { Link } from 'react-router-dom';

const WriterTerm = ({ item }) => {
  console.log(item);
  
  return (
    <>
      {item.map((tem, index) => (
        <Link to = {tem} key={index} className='hover:text-blue-600 hover:scale-105  hover:cursor-pointer bg- hover:bg-green-200 p-1 rounded-md'>{tem}</Link>
      ))}
    </>
  );
}

export default WriterTerm;
