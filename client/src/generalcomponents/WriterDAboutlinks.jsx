
import React from 'react'
import { Link } from 'react-router-dom'

const WriterDAboutlinks = ({Slinks}) => {
  return <>
 
    {Slinks.map((itemLink)=><Link to={'https://www.google.com/'} target='_blank' className="text-xs hover:cursor-pointer ">{itemLink}</Link>)}
  
  </>
}

export default WriterDAboutlinks