import React, {Component} from 'react'
import './Body.scss'
import { Grid } from 'semantic-ui-react'
import Home from './Home/home'
import About from './About/about'
import Faq from './FAQs/faq'
import Packages from './Packages/packages'
import Recommendations from './Recommendations/recommendations'
import Samples from './Samples/samples'
// import Contact from './Contact/contact'

class Body extends Component {

  constructor (props) {
    super (props)

    this.state = {
      mobile: null
    }
  }

  componentDidMount () {
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

  render () {
    const { mobile } = this.state
    const { refs, handleSidebar } = this.props

    return (
      <main className={'mainbody'} onClick={handleSidebar} style={{width: '100%'}}>
        { refs !== {} &&
          <Grid stackable>
            <Grid.Column width={16}>
              <section ref={refs[1]}>
                <Home mobile={mobile} refs={refs} />
              </section>
              <section ref={refs[2]}>
                <About mobile={mobile}/>
              </section>
              <section ref={refs[3]}>
                <Packages mobile={mobile}/>
              </section>
              <section ref={refs[4]}>
                <Samples mobile={mobile}/>
              </section>
              <section ref={refs[5]}>
                <Faq mobile={mobile}/>
              </section>
              <section ref={refs[6]}>
                <Recommendations mobile={mobile}/>
              </section>
              {/* <section ref={refs[7]}>
                <Contact/>
              </section> */}
            </Grid.Column>
          </Grid>
        }
      </main>
    )
  }
}

export default Body