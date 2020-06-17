import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/global.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='font-mono subpixel-antialiased leading-relaxed'>
      <h2 className='font-mono'>Bonjour..</h2>
      <p className='text-justify'>
          Thank you for reaching out here. <br/><br/>
          I am Sisir, <strong>Software Developer</strong> based in Nepal.
          Currently, I am building backend solutions in a Cloud Native Environment @fusemachines.
      </p>
      <p className='text-justify'>
        Details after giving attention fascinates me. Even more, what fascinates me
          is the art and joy of writing computer programs, which puzzles, twists and ultimately shower of joy on its completion.
      </p>
    </div>
    <div className='sm:flex-none'>
      <div className='mx-auto' style={{ width: '400px' }}>
      </div>
    </div>
  </Layout>
)

export default IndexPage
