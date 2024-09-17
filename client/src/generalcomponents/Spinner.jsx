import React from 'react'

const Spinner = ({styles}) => {
  return (
    <div class="flex justify-center " >
    <div class={`border-t-4 border-blue-500 border-solid rounded-full animate-spin ${styles}`} role="status" >
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  
  )
}

export default Spinner