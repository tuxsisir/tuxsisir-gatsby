import { Link } from 'gatsby'
import React from 'react'

import './nav.css'

const Nav = () => (
  <nav className='flex flex-row-reverse mb-4 font-mono'>
    <Link className='mx-3' to="/using-typescript/">ABOUT</Link>
    <Link className='mx-3' to="/using-typescript/">BLOG</Link>
    <Link className='mx-3' to="/page-2">PROJECTS</Link>
    <Link className='mx-3' to="/">HOME</Link>
  </nav>
)

export default Nav
