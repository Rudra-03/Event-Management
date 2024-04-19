import React from 'react'
import { Link } from 'react-router-dom';
import Loginbtn from './Loginbtn';
import Signupbtn from './Signupbtn';
import Logo from '../assets/logo_white.webp';

function Header() {
  return (
    <header className="flex justify-between items-center p-3 bg-slate-900 text-white font-serif">
        <div className="logo ">
          <img src={Logo} alt="Logo" className='h-12'/>
        </div>
        <nav>
          <ul className='flex gap-5 items-center pr-10 text-lg'>
            <li><Link to="">HOME</Link></li>
            <li><Link to="/events">EVENTS</Link></li>
            <li><Loginbtn/></li>
            <li><Signupbtn /></li>
          </ul>
        </nav>
      </header>
  )
}

export default Header