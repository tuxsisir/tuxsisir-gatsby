import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/global.css'
import { Link } from 'gatsby'


function Greeting (props) {
  // Functional Component
  return (
    <h2 className={props.className}>
      { props.value || 'Hello'}
    </h2>
  )
}
class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      greeting: 'Hello',
      className: 'w3-animate-fading'
    }
  }

  render () {
    const greetings = ['Hello', 'Bonjour', 'Hola', 'Guten Tag', 'Namaste', 'Nǐ hǎo', 'Yeoboseyo', 'Kon\'nichiwa']
    var randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
    var self = this
    setTimeout(() => {
      self.setState({
        greeting: randomGreeting
      })
    }, 4000)
    return (
      <Layout>
        <SEO title="Home" />
        <div className='font-mono subpixel-antialiased leading-relaxed'>
          <Greeting value={this.state.greeting} className={this.state.className} />
          <p className='text-justify'>
          Thank you for reaching out here. <br/><br/>
          I am Sisir, <strong className='tux-underline'>Software Developer</strong> based in Nepal.
          Currently, I am building backend solutions in a Cloud Native Environment @fusemachines.
          </p>
          <p>
              This is where I <strong>may</strong> put my jibber-jabber writings to references and see backs.
            I hope that the things here would be of help for you too.
          </p>
          <p>
            If you want to know more about me, <Link className='no-underline' to="/about-me">click here.</Link>
          </p>
        </div>
        <hr />
        <div>
          <h3>Food for thought</h3>
          <blockquote className="twitter-tweet"><p lang="en" dir="ltr">&quot;In programming the hard part isn’t solving problems, but deciding what problems to solve.&quot; - Paul Graham</p>&mdash; Programming Wisdom (@CodeWisdom) <a href="https://twitter.com/CodeWisdom/status/1250457650200031232?ref_src=twsrc%5Etfw">April 15, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
      </Layout>
    )
  }
}

export default HomePage
