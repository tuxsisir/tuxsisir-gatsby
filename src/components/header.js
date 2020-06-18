import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './header.css'

const Header = ({ siteTitle }) => (
  <header className='site-header flex justify-between items-center'>
    <div>
      <h1 className='mt-5 font-sans'>
        <Link to="/" className='text-blue-400 no-underline'>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div>
      <a
        className='float-right mx-2 text-gray-700'
        href='mail'>
        <FontAwesomeIcon icon={faEnvelope} className='text-xl' />
      </a>
      <a
        className='float-right mx-2 text-gray-700'
        href='www.linkedin.com/in/sisir-ghimire-chettri'>
        <FontAwesomeIcon icon={faLinkedin} className='text-xl' />
      </a>
      <a
        className='float-right mx-2 text-gray-700'
        href='https://github.com/tuxsisir'>
        <FontAwesomeIcon icon={faGithub} className='text-xl' />
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
