import React from 'react'
import Userheader from './Userheader'
import { Outlet } from 'react-router-dom'
function Userpage() {
  return (
    <>
      <Userheader/>
      <Outlet/>
    </>
  )
}

export default Userpage