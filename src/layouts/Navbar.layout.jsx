import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.components'

const NavbarLayout = () => {
  return <>
  <Navbar/>
  <Outlet/>
  </>
}

export default NavbarLayout