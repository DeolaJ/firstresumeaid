import React, { Component } from 'react'
import './Nav.scss'
import { Icon, List, Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Aux from '../../../hoc/Aux'

class Nav extends Component {
  constructor (props) {
    super()
    this.state = {
      scrolling: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if ((window.scrollY === 0) && (this.state.scrolling === true)) {
      this.setState({
        scrolling: false
      })
    } else if ((window.scrollY !== 0) && (this.state.scrolling !== true)) {
      this.setState({
        scrolling: true
      })
    }
  }

  changeActiveState = (item, id) => () => {
    const { refs } = this.props
    var items = document.querySelectorAll('.nav .item')
    items.forEach((oneItem) => {
      var oneItemText = oneItem.innerText.toLowerCase()
      oneItem.className = (item === oneItemText) ? `item active ${oneItemText}` : `item ${oneItemText}`
    })
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  render () {
    const { navItems, handleSidebar, mobile, navVisible } = this.props

    return (
      <nav className={'nav'} style={ !this.state.scrolling ? { position: 'absolute', display: navVisible ? 'block' : 'none' } : { position: 'fixed', boxShadow: '0 1px 2px rgba(0, 0, 0, .3)', display: navVisible ? 'block' : 'none'}}>

        {
          !mobile ?
          <Aux>
            <div className={'logo'}>
              Logo
            </div>
            <List horizontal link>
              {
                navItems.map((item) => (
                  <List.Item as='a'
                    key={item.id} 
                    className={item.name ==='Home' ? `active ${item.name.toLowerCase()}` : `${item.name.toLowerCase()}`} 
                    onClick={this.changeActiveState(item.name.toLowerCase(), item.id)}
                    >
                      {item.name}
                  </List.Item>
                ))
              }
              <List.Item>
                <Link to='/payment'>
                  <Button className={'primary-main'}>Request</Button>
                </Link>
              </List.Item>
            </List>
          </Aux>

          :
          <Grid className={'mobile-navitems'}>
            <Grid.Row columns={3}>
              <Grid.Column textAlign='left' verticalAlign='middle'>
                <Icon onClick={handleSidebar} size='big' name='bars'/>
              </Grid.Column>

              <Grid.Column textAlign='center' verticalAlign='middle'>
                Logo
              </Grid.Column>

              <Grid.Column textAlign='right'>
                <Link to='/payment'>
                  <Button className={'primary-main icon'}>
                    <Icon onClick={handleSidebar} size='large' style={{ color: 'white' }} name='location arrow'/>
                  </Button>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        }
        
      </nav>
    )
  }
}

export default Nav