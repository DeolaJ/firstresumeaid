import React, { Component } from 'react'
import { Header, Button, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Footer.scss'

class Footer extends Component {

  componentDidMount () {
    const footerYear = document.querySelector('.footer-year')
    const currentYear = new Date().getFullYear()

    footerYear.innerHTML = currentYear
  }

  render () {

    return (
      <footer className={'footer'}>

        <Container className={'banner'} textAlign={'center'}>
          <Header as='h2' textAlign='center'>
            Convinced about our services?
          </Header>
          <Link to='/payment'>
            <Button className={'primary-sub'} size='huge'>
              Try now
            </Button>
          </Link>
        </Container>
        <div className={'copyright'}>
          &copy; Copyright <span className={'footer-year'}></span> First-Resume Aid 
        </div>
      </footer>
    )
  }
}

export default Footer