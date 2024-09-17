import React, { useContext, useEffect, useState } from 'react'
import { categories } from '../utils/category'


import { Context } from '../context'


const DropDown = () => {
    const {selectCa,setselectCa} =useContext(Context)
    useEffect(() => {
      import('bootstrap/dist/css/bootstrap.min.css');
      import('bootstrap/dist/js/bootstrap.min.js');
      

    }, []);
    
  return (
    <div class="dropdown-center">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  {selectCa}
  </button>
  <ul class="dropdown-menu " >
    {categories.map((category)=><li className='p-1 mx-2 gap-1 hover:cursor-pointer' style={{backgroundColor : category.color}} onClick={()=>setselectCa(category.name)}>{category.name}</li>)}
    
   
  </ul>
</div>
  )
}

export default DropDown