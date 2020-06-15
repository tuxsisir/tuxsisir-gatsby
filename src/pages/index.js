import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import '../styles/global.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='flex content-start justify-around flex-wrap' style={{ alignItems: 'center' }}>
      <div className='sm:flex-none font-mono text-2xl subpixel-antialiased leading-relaxed'>
        <p>
          Hi, Thank you for reaching out here.
        </p>
        <p>
          I am Sisir, Software Engineer based in Nepal.
        </p>
      </div>
      <div className='sm:flex-none'>
        <div className='mx-auto' style={{ width: '400px' }}>
          <Image />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
