import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutMe = () => (
  <Layout>
    <SEO title="About Me"/>
    <h2>About Me</h2>
    <h3>Career</h3>
    <p>Currently, @fusemachines.</p>
    <h3>Personal</h3>
    <p>
      <span className='line-through mr-1'>Fun Loving, Traveller, Listening to music...</span>
        Mostly, I am spending my time indoors. Sometimes -- I even forget to play some music. (wtf)
    </p>
    <p>
        I <span className='line-through mr-1'>love</span>enjoy Synthwave, CyberFuture, Maps, Timelines, Hogwarts, Spirituality, Yoga and Books.
    </p>
  </Layout>
)

export default AboutMe
