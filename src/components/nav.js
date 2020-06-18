import { Link } from 'gatsby'
import React from 'react'

import Image from '../components/image'

const Nav = () => (
  <nav className='font-mono'>
    <Image/>
    <ul className='list-none mt-5'>
      <li><Link className='no-underline' to="/">Home</Link></li>
      <li><Link className='no-underline' to="/blog">Blog</Link></li>
      <li><Link className='no-underline' to="/cheatsheet">Cheatsheet</Link></li>
      {/* <li><Link className='no-underline' to="/programming">Programming</Link></li> */}
      <li><Link className='no-underline' to="/toolbelt">Toolbelt</Link></li>
      <li><Link className='no-underline' to="/about-me">About Me</Link></li>
    </ul>
  </nav>
)

export default Nav
