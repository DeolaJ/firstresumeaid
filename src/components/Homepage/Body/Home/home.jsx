import React, {Component} from 'react'
import { Grid, Header, Container, List, Button } from 'semantic-ui-react'
import './home.scss'
import Typist from 'react-typist'
import { Link } from 'react-router-dom'
import homeIcon from '../../../../images/home03.png'
import homeIconMobile from '../../../../images/home03300.png'

class Home extends Component {
  scrollToSamples = () => {
    const { refs } = this.props

    refs[4].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  render () {
    const { mobile } = this.props

    return (
      <Grid stackable className={'section home-container'} style={{minHeight: '100vh'}}>

        <div className={'illustration-banner hide-on-mobile'}>
          <div className={'home-illustration'} style={{ backgroundImage: `url(${homeIcon})`}}>
          </div>
        </div>
        <Grid.Column width={16}>
          <Container textAlign={mobile ? 'center' : 'left'} className={'home-content-container'}>
            <Header as='h1' className={'hide-on-mobile'}>
              Welcome, 
              <Typist cursor={{
                show: false,
                blink: true,
                element: '|',
                hideWhenDone: true,
                hideWhenDoneDelay: 1000,
              }} avgTypingDelay={130}>
                <br/>
                We are First Resume-Aid
              </Typist>
            </Header>

            <Header as='h1' textAlign='center' className={'mobile-only'}>
              Welcome, 
              <Typist cursor={{
                show: false,
                blink: true,
                element: '|',
                hideWhenDone: true,
                hideWhenDoneDelay: 1000,
              }} avgTypingDelay={130}>
                <br/>
                We are First Resume-Aid
              </Typist>
            </Header>
            <div className={'header-content hide-on-mobile'}>
              <p>
                We offer Free resume critique, Excellent Customer Support, 
                <br/>
                No charge for cover letter and follow-up letter, 
                <br/>
                Unlimited revisions, Editable version &amp; PDF format delivery
              </p>
            </div>
            <div className={'header-content mobile-only'}>
              <p>
                We offer Free resume critique, Excellent Customer Support, 
                No charge for cover letter and follow-up letter, 
                Unlimited revisions, Editable version &amp; PDF format delivery
              </p>
            </div>
            <List horizontal>
              <List.Item>
                <Link to='/payment'>
                  <Button size='large' color='blue' className={'primary-main'}>
                    Request
                  </Button>
                </Link>
              </List.Item>
              <List.Item>
                <Button size='large' color='blue' className={'primary-sub'} onClick={this.scrollToSamples}>
                  Check samples
                </Button>
              </List.Item>
            </List>
          </Container>
          <div className={'mobile-only home-icon'}>
            <img src={homeIconMobile} alt="home icon mobile" />
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Home