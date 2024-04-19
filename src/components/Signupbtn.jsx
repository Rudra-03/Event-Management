import React from 'react'
import { useNavigate } from 'react-router-dom'
function Signupbtn(props) {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate('/signup') } className={`bg-slate-300 rounded-md ${props.width} ${props.height} ${props.size}  pt-1 pb-1 pr-4 pl-4 text-black font-serif`}>Signup</button>
  )
}

export default Signupbtn