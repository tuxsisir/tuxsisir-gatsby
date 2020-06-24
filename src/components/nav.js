import { Link } from 'gatsby'
import React from 'react'

import Image from '../components/image'

class Nav extends React.Component {
  render () {
    return (
      <nav className='font-mono'>
        <Image placeholderStyle={{ visibility: 'hidden' }} />
        <div className='flex flex-col text-sm'>
          <Link className='font-bold' activeClassName='underline' to="/">Home</Link>
          {/* <Link className='font-bold' activeClassName='underline' to="/blog">Blog</Link>
          <Link className='font-bold' activeClassName='underline' to="/cheatsheet">Cheatsheets</Link> */}
          <Link className='font-bold' activeClassName='underline' to="/toolbelt">Toolbelt</Link>
          <Link className='font-bold' activeClassName='underline' to="/about-me">About Me</Link>

        </div>
        <div className='flex flex-col my-6 text-xs'>
          <a href="https://vim-adventures.com/">Vim Adventures</a>
          <a href='https://www.worldometers.info/coronavirus/'>COVID-19 Coronavirus Pandemic</a>
          <a href='https://covidnepal.org/'>https://covidnepal.org/</a>
        </div>
      </nav>
    )
  }
}

export default Nav
