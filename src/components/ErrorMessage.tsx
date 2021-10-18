import React from 'react'

type ErrorMessageProps ={
  text:string 
}

export const ErrorMessage:React.FC<ErrorMessageProps> = ({text}) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      {text}
    </div>
  )
}
