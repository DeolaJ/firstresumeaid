import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon, Sidebar, Menu, Button } from 'semantic-ui-react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'

class VerticalSidebar extends Component {

  static = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool
  }

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
    var items = document.querySelectorAll('.sidebar-menu .item')
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

    const { animation, direction, visible, handleSidebar, navItems } = this.props 

    return (
      <Sidebar
        as={Menu}
        animation={animation}
        direction={direction}
        icon='labeled'
        inverted
        vertical
        visible={visible}
        width='thin'
        style={{ zIndex: '4'}}
        className={'sidebar-menu'}
      > 
          <Menu.Item>
            Logo
          </Menu.Item>
          {
            navItems.map(navItem => (
              <Menu.Item key={navItem.id} as='a' className={navItem.name ==='Home' ? `active ${navItem.name.toLowerCase()}` : `${navItem.name.toLowerCase()}`} 
              onClick={this.changeActiveState(navItem.name.toLowerCase(), navItem.id)}>

                  {navItem.name}
                  
              </Menu.Item>
            ))
          }

          <Menu.Item as='div'>
            <Link to='/payment'>
              <Button className={'white-sub'}>
                Request
              </Button>
            </Link>
          </Menu.Item>

          <Menu.Item as='a' onClick={handleSidebar}> 
            Back
            <Icon name='chevron right' />
          </Menu.Item>
      
      </Sidebar>
    )
  }
}



export default VerticalSidebar