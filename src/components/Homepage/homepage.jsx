import React, { Component, createRef } from 'react'
import { Sidebar, Segment } from 'semantic-ui-react'
import Nav from './Nav/Nav'
import Body from './Body/Body'
import Footer from '../Footer/Footer'
import 'semantic-ui-css/semantic.min.css'
import VerticalSidebar from './Sidebar/VerticalSidebar'
import Aux from '../../hoc/Aux'

class Homepage extends Component {

  state = {
    refs: {},
    navItems: [
      {
        id: 1,
        name: 'Home',
        link: '/'
      },
      {
        id: 2,
        name: 'About Us',
        link: '/about'
      },
      {
        id: 3,
        name: 'Packages',
        link: '/packages'
      },
      {
        id: 4,
        name: 'Samples',
        link: '/samples'
      },
      {
        id: 5,
        name: 'FAQs',
        link: '/faq'
      },
      {
        id: 6,
        name: 'Reviews',
        link: '/recommendations'
      },
      // {
      //   id: 7,
      //   name: 'Contact Us',
      //   link: '/contact',
      //   icon: 'phone'
      // }
    ],
    animation: 'uncover',
    direction: 'left',
    dimmed: true,
    visible: false,
    mobile: null,
    navVisible: true
  }

  componentDidMount () {
    const { navItems } = this.state
    this.createNavRef(navItems)

    const body = document.querySelector('.home-container').clientWidth

    if (body <= 768 ) {
      this.setState({
        mobile: true
      })
    } else if (body > 768) {
      this.setState({
        mobile: false
      })
    }
  }

  createNavRef = (arr) => {
    const refs = arr.reduce((acc, value) => {
      acc[value.id] = createRef();
      return acc;
    }, {});

    this.setState({
      refs: refs
    })
  }

  handleSidebar = () =>
  this.setState(prevState => ({ visible: !prevState.visible, navVisible: !prevState.navVisible }))

  // handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked })

  // handleDirectionChange = direction => () => this.setState({ direction, visible: false })

  render () {
    const { refs, navItems, animation, dimmed, direction, visible, mobile, navVisible } = this.state
    
    return (
      <Aux>
        <Nav navItems={navItems} mobile={mobile} refs={refs} handleSidebar={this.handleSidebar} navVisible={navVisible} />
        {/* <VerticalSidebar  animation={animation} direction={direction} visible={visible} handleSidebar={this.handleSidebar} /> */}

        <Sidebar.Pushable as={Segment} style={{marginTop: '0', border: 'none' }} >
        <VerticalSidebar  refs={refs} animation={animation} direction={direction} visible={visible} handleSidebar={this.handleSidebar} navItems={navItems} />

          <Sidebar.Pusher dimmed={dimmed && visible} onClick={ !visible ? null : this.handleSidebar} >
            <Body refs={refs} mobile={mobile}/>
            <Footer/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Aux>
    )
  }
}

export default Homepage;


