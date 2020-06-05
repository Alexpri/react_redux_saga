import React from 'react'

export const AlertMessage = ({message}) => {
  return <div className="alert alert-danger" role="alert">
    {message}
  </div>
}
