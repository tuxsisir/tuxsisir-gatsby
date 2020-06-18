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
      className: 'transition duration-500 ease-in-out'
    }
  }

  render () {
    const greetings = ['Hello', 'Bonjour', 'Hola', 'Namaste', 'Ni Hao', 'Dia Duit', 'Yia Sou']
    var randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
    var self = this
    setTimeout(() => {
      self.setState({
        greeting: randomGreeting
      })
    }, 5000)
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
            This is where I put my jibber-jabber to references and see backs.
            I hope that the things here would be of help for you too.
          </p>
          <p>
            If you want to know more about me, <Link className='no-underline' to="/about-me">click here.</Link>
          </p>
        </div>
      </Layout>
    )
  }
}

export default HomePage
