import React from 'react'
import { NavLink } from 'react-router-dom'
import authService from '../../appwrite/auth'
import { useNavigate, Link } from 'react-router-dom'

function Userheader() {
  const navigation = useNavigate();
  const handlelogout = () => {
    authService.logout();
    navigation("/")

  }
  return (
    <>
      <header>
        <nav>
          <ul className='flex gap-4 pr-5 justify-end text-lg pt-2 pb-2 bg-slate-900 text-white'>
            <li><NavLink to ="" className={({isActive}) => {`${isActive ? 'bg-slate-800' : ''}`}}>Account</NavLink></li>
            <li><Link to = "participateform">Participate</Link></li>
            <li><Link to = "events">Events</Link></li>
            <li><button type="button" onClick={handlelogout}>Logout</button></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Userheader