import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'

import './header.css'
config.autoAddCss = false

const Header = ({ siteTitle }) => (
  <header className='site-header flex justify-between items-center'>
    <div>
      <h1 className='mt-5 font-sans'>
        <Link to="/" className='font-thin no-underline hover:no-underline'>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div>
      <a
        className='float-right mx-2 text-gray-700'
        href='mailto:samratsisir294@gmail.com'>
        <FontAwesomeIcon icon={faEnvelope} className='text-lg' />
      </a>
      <a
        className='float-right mx-2 text-gray-700'
        href='https://linkedin.com/in/sisir-ghimire-chettri'>
        <FontAwesomeIcon icon={faLinkedin} className='text-lg' />
      </a>
      <a
        className='float-right mx-2 text-gray-700'
        href='https://github.com/tuxsisir'>
        <FontAwesomeIcon icon={faGithub} className='text-lg' />
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
