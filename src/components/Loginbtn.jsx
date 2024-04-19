import React from 'react'
import { useNavigate } from 'react-router-dom'
function Loginbtn(props) {
const navigate = useNavigate()
  return (
    <button onClick={() => navigate('/login')} className={`bg-slate-300 rounded-md ${props.width} ${props.height} ${props.size}  pt-1 pb-1 pr-4 pl-4 text-black font-serif`}>Login</button>
  )
}

export default Loginbtn