
import React from 'react'

const Button = ({icon ,styles , type ,onClick , label,disabled}) => {
  return (
   <button
   disabled ={disabled}
   style={{opacity: disabled ? 0.5 : 1 }}
      type ={type || "button"}
      className={`flex  items-center justify-center text-base ${styles}`}
      onClick={onClick}>
        {label}
        {icon && <div className='ml-2'>{icon}</div>}
   </button>
  )
}

export default Button