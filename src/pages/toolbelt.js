import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import SEO from '../components/seo'

class HomePage extends React.Component {
  render () {
    return (
      <Layout>
        <SEO title="Toolbelt" />
        <h2>Toolbelt - Full Stack Docker Agent</h2>
        <p>I am carrying the toolbelt of full stack web development as of now.</p>
          <a href="https://stackshare.io" className='mb-3'>Powered By: Stack Share</a>
        <Helmet
          script={[{
            async: true,
            src: 'https://cdn1.stackshare.io/javascripts/client-code.js',
            charSet: 'utf-8'
          }]}
        />
        <a frameBorder="0" data-theme="light" data-layers="1,2,3,4" data-stack-embed="true" href="https://embed.stackshare.io/stacks/embed/ddfb83631dd5c76f1f8f5c03aac78d"></a>
      </Layout>
    )
  }
}

export default HomePage
