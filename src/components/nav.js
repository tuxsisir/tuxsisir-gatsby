import { Link } from 'gatsby'
import React from 'react'

const Nav = () => (
  <nav className='flex flex-row-reverse mb-4 font-mono'>
    <Link className='mx-3' to="/about">ABOUT</Link>
    <Link className='mx-3' to="/blog">BLOG</Link>
    <Link className='mx-3' to="/projects">PROJECTS</Link>
    <Link className='mx-3' to="/">HOME</Link>
  </nav>
)

export default Nav
