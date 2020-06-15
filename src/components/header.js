import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './header.css'

const Header = ({ siteTitle }) => (
  <header className='header'>
    <div className="container mx-auto">
      <div
        className='header-content'
      >
        <a
          className='float-right mx-3 text-white'
          href='www.linkedin.com/in/sisir-ghimire-chettri'>
          <FontAwesomeIcon icon={faLinkedin} size='2x' />
        </a>
        <a
          className='float-right mx-3 text-white'
          href='https://github.com/tuxsisir'>
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>
        <h1>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none'
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
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
