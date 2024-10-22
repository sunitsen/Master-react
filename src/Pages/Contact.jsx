import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  const handelGoToHome = () =>{
    navigate('/')
  }
  return (
    <div>
      <h2>I am from Contact</h2>
      <button onClick={handelGoToHome}>Go To Home</button>
    </div>
  )
}

export default Contact
