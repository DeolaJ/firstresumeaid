import React, {Component} from 'react'
import { Grid, Container, Header, Segment, Icon, Card, Divider, Statistic, Label, Button } from 'semantic-ui-react'
import './packages.scss'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import Aux from '../../../../hoc/Aux'
import manIcon from '../../../../images/man.png'
import manIconMobile from '../../../../images/man300.png'
import manIconTab from '../../../../images/man500.png'
import conversation from '../../../../images/icons/007-conversation.svg'
import guarantee from '../../../../images/icons/011-guarantee.svg'
import favorites from '../../../../images/icons/001-favorites-button.svg'
import employment from '../../../../images/icons/015-employment.svg'
import recruitment from '../../../../images/icons/016-recruitment.svg'

class Packages extends Component {

  // constructor (props) {
  //   super (props)

  //   this.state = {
  //     mobile: null
  //   }
  // }

  // componentDidMount () {
  //   const packages = document.querySelector('.packages-container').clientWidth

  //   if (packages <= 768 ) {
  //     this.setState({
  //       mobile: true
  //     })
  //   } else if (packages > 768) {
  //     this.setState({
  //       mobile: false
  //     })
  //   }
  // }

  render () {
    const { mobile } = this.props

    return (
      <Grid stackable className={'packages-container'} style={{minHeight: '100vh'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1544.32" height="895.82" viewBox="0 0 1544.32 895.82"><title>rocks</title><path d="M736.5,155.5c-61,93-136,132-190,117s-121-121-104-149S796.52,64,736.5,155.5Z" transform="translate(-165.28 -94.68)" fill="#fcf"/><path d="M1674.5,186.5c-22,82-102,197-160,199s-314-35-308-78,36-176,75-170S1696.5,104.5,1674.5,186.5Z" transform="translate(-165.28 -94.68)" fill="#fc9"/><path d="M348.5,953.5c-116.8-111.93,266-220,308-192s71,229,25,229S372.5,976.5,348.5,953.5Z" transform="translate(-165.28 -94.68)" fill="#633"/><path d="M1549.5,888.5c-87-63-58-186,0-212s65-35,138-24S1636.5,951.5,1549.5,888.5Z" transform="translate(-165.28 -94.68)" fill="#336"/><path d="M222.5,414.5c104,58,104,162,104,162s-149,100-160-28S222.5,414.5,222.5,414.5Z" transform="translate(-165.28 -94.68)" fill="#666"/></svg>
        <Grid.Column width={16}>
          <div className={'ui container'}>
            <Fade bottom cascade>
              <Header as='h2' className={'section-header'} textAlign={'center'}>Why Choose Us?</Header>
              {/* <img src={manIconMobile} alt='man thinking' style={{ width: '100%' }} /> */}
              <Segment.Group>
                <Segment basic textAlign='center'>
                  <Header icon as='h3' textAlign='center'>
                    <img src={recruitment} className={'package-icon'} alt={'package icon'} />
                  </Header>
                  <div>
                    <p>
                      Over 75% of our clients receive offers to interview within 30 days of posting their resume
                    </p>
                  </div>
                </Segment>
                <Segment basic textAlign='center'>
                  <Header icon as='h3' textAlign='center'>
                    <img src={guarantee} className={'package-icon'} alt={'package icon'} />
                  </Header>
                  <div>
                    <p>
                      We stand by our products and services, we ensure 100% customer satisfaction 
                    </p>
                  </div>
                </Segment>
                <Segment basic textAlign='center'>
                  <Header icon as='h3' textAlign='center'>
                    <img src={employment} className={'package-icon'} alt={'package icon'} />
                  </Header>
                  <div>
                    <p>
                      Our clients are more likely to be contacted by a potential employer
                    </p>
                  </div>
                </Segment>
                <Segment basic textAlign='center'>
                  <Header icon as='h3' textAlign='center'>
                    <img src={conversation} className={'package-icon'} alt={'package icon'} />
                  </Header>
                  <div>      
                    <p>
                      We effectively blend time tested strategies with innovative approaches
                    </p>
                  </div>
                </Segment>
                <Segment basic textAlign='center'>
                  <Header icon as='h3' textAlign='center'>
                    <img src={favorites} className={'package-icon'} alt={'package icon'} />
                  </Header>
                  <div>      
                    <p>
                      Our resumes consistently outperform the competition
                    </p>
                  </div>
                </Segment>

              </Segment.Group>

              <Divider style={{ marginBottom: '5em', marginTop: '4em' }} />
              <Header as='h2' textAlign={'center'} className={'section-header'} style={{ marginTop: '40px'}}>
                Package Pricing plans
              </Header>

              <div className={'pricing-body'}>
                <Header as='h2' textAlign='left' style={!mobile ? { marginBottom: '3em'} : { fontSize: '24px' }}>
                  Individual Packages
                </Header>
                {
                  !mobile ?

                  <Card.Group itemsPerRow={3} className={'package-cards individual'}>
                    <Card>
                      <div className={'background-placeholder red'}>
                      </div>
                      <Card.Content>
                        <Card.Header textAlign='center'>Student Level</Card.Header>
                      </Card.Content>
                      <Card.Content textAlign='center'>
                        <Statistic horizontal>
                          <Statistic.Value>$199.95</Statistic.Value>
                          <Statistic.Label>/per doc</Statistic.Label>
                        </Statistic>
                      </Card.Content>
                      <Card.Content>
                        <Segment basic>
                          <p>Designed for recent graduates</p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/student-level'>
                          <Button size='large' className={'primary-sub'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                    <Card>
                      <div className={'background-placeholder popular orange'}>
                        <Label as='a' color='red' ribbon size='huge'>
                          Most Popular
                        </Label>
                      </div>
                      <Card.Content>
                        <Card.Header textAlign='center'>Professional Level</Card.Header>
                      </Card.Content>
                      <Card.Content textAlign='center'>
                        <Statistic horizontal>
                          <Statistic.Value>$249.95</Statistic.Value>
                          <Statistic.Label>/per doc</Statistic.Label>
                        </Statistic>
                      </Card.Content>
                      <Card.Content>
                        <Segment basic>
                          <p>
                            Designed for professionals, specialists, manager with five or more years of reliability and experience gradually creating a name for themselves.
                          </p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/professional-level'>
                          <Button size='huge' className={'primary-main'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                    <Card>
                      <div className={'background-placeholder blue'}>
                      </div>
                      <Card.Content>
                        <Card.Header textAlign='center'>IT Level</Card.Header>
                      </Card.Content>
                      <Card.Content textAlign='center'>
                        <Statistic horizontal>
                          <Statistic.Value>$279.95</Statistic.Value>
                          <Statistic.Label>/per doc</Statistic.Label>
                        </Statistic>
                      </Card.Content>
                      <Card.Content>
                        <Segment basic>
                          <p>Designed for IT/Tech professionals</p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/it-level'>
                          <Button size='large' className={'primary-sub'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                    <Card>
                      <div className={'background-placeholder blue'}>
                      </div>
                      <Card.Content>
                        <Card.Header textAlign='center'>LinkedIn Profile Add-on</Card.Header>
                      </Card.Content>
                      <Card.Content textAlign='center'>
                        <Statistic horizontal>
                          <Statistic.Value>$149.95</Statistic.Value>
                          <Statistic.Label>/per doc</Statistic.Label>
                        </Statistic>
                      </Card.Content>
                      <Card.Content>
                        <Segment basic>
                          <p>
                            I will shift your LinkedIn profile from making you look outdated to optimizing your LinkedIn profile properly to draw the attention of hiring managers. 
                            <br/>
                            Once your profile is modernized, you will land interviews and ultimately get the offer for the position you want and deserve. 
                          </p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/linkedin-profile-add-on'>
                          <Button size='large' className={'primary-sub'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                    <Card>
                      <div className={'background-placeholder blue'}>
                      </div>
                      <Card.Content>
                        <Card.Header textAlign='center'>Executive Level</Card.Header>
                      </Card.Content>
                      <Card.Content textAlign='center'>
                        <Statistic horizontal>
                          <Statistic.Value>$299.95</Statistic.Value>
                          <Statistic.Label>/per doc</Statistic.Label>
                        </Statistic>
                      </Card.Content>
                      <Card.Content>
                        <Segment basic>
                          <p>
                            Designed for executive management and C-level positions – those who are prepared to be at the head of an organization
                          </p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/executive-level'>
                          <Button size='large' className={'primary-sub'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                    <Card>
                      <div className={'background-placeholder blue'}>
                      </div>
                      <Card.Content>
                        <Card.Header textAlign='center'>Executive Biography Add-on</Card.Header>
                      </Card.Content>
                      <Card.Content textAlign='center'>
                        <Statistic horizontal>
                          <Statistic.Value>$179.95</Statistic.Value>
                          <Statistic.Label>/per doc</Statistic.Label>
                        </Statistic>
                      </Card.Content>
                      <Card.Content>
                        <Segment basic>
                          <p>
                            I will focus on critical career-defining milestones and weave your personal value, leadership philosophy, and vision into a marketing piece, helping you attract the attention of top-tier employers. 
                            <br/>
                            You will receive a strategically written bio that is reverse engineered with YOUR GOAL in mind. 
                          </p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/executive-biography-add-on'>
                          <Button size='large' className={'primary-sub'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                  </Card.Group>

                  :

                  <Card.Group itemsPerRow={1} className={'package-cards mobile'}>
                    <Card>
                      <Card.Content textAlign='center' className={'card-header_mobile'}>
                        <Header as='h3'>Student Level</Header>
                        <Card.Meta>
                          <Statistic horizontal>
                            <Statistic.Value>$199.95</Statistic.Value>
                            <Statistic.Label>/per doc</Statistic.Label>
                          </Statistic>
                        </Card.Meta>
                      </Card.Content>
                      <Card.Content className={'card-content_mobile'}>
                        <Segment basic>
                          <p>Designed for recent graduates</p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/student-level'>
                          <Button size='large' className={'primary-sub'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                    <Card>
                      <div className={'popular'}>
                        <Label as='a' color='red' ribbon size='small'>
                          <Icon name='star'/>
                        </Label>
                      </div>
                      <Card.Content textAlign='center' className={'card-header_mobile'}>
                        <Header as='h3'>Professional Level</Header>
                        <Card.Meta>
                          <Statistic horizontal>
                            <Statistic.Value>$249.95</Statistic.Value>
                            <Statistic.Label>/per doc</Statistic.Label>
                          </Statistic>
                        </Card.Meta>
                      </Card.Content>
                      <Card.Content className={'card-content_mobile'}>
                        <Segment basic>
                          <p>
                            Designed for professionals, specialists, manager with five or more years of reliability and experience gradually creating a name for themselves.
                          </p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/professional-level'>
                          <Button size='huge' className={'primary-main'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Card.Content textAlign='center' className={'card-header_mobile'}>
                        <Header as='h3'>IT Level</Header>
                        <Card.Meta>
                          <Statistic horizontal>
                            <Statistic.Value>$279.95</Statistic.Value>
                            <Statistic.Label>/per doc</Statistic.Label>
                          </Statistic>
                        </Card.Meta>
                      </Card.Content>
                      <Card.Content className={'card-content_mobile'}>
                        <Segment basic>
                          <p>Designed for IT/Tech professionals</p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/it-level'>
                          <Button size='large' className={'primary-sub'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Card.Content textAlign='center' className={'card-header_mobile'}>
                        <Header as='h3'>Executive Level</Header>
                        <Card.Meta>
                          <Statistic horizontal>
                            <Statistic.Value>$299.95</Statistic.Value>
                            <Statistic.Label>/per doc</Statistic.Label>
                          </Statistic>
                        </Card.Meta>
                      </Card.Content>
                      <Card.Content className={'card-content_mobile'}>
                        <Segment basic>
                          <p>
                            Designed for executive management and C-level positions – those who are prepared to be at the head of an organization
                          </p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/executive-level'>
                          <Button size='large' className={'primary-sub'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Card.Content textAlign='center' className={'card-header_mobile'}>
                        <Header as='h3'>LinkedIn Profile Add-on</Header>
                        <Card.Meta>
                          <Statistic horizontal>
                            <Statistic.Value>$149.95</Statistic.Value>
                            <Statistic.Label>/per doc</Statistic.Label>
                          </Statistic>
                        </Card.Meta>
                      </Card.Content>
                      <Card.Content className={'card-content_mobile'}>
                        <Segment basic>
                          <p>
                            I will shift your LinkedIn profile from making you look outdated to optimizing your LinkedIn profile properly to draw the attention of hiring managers. 
                            <br/>
                            Once your profile is modernized, you will land interviews and ultimately get the offer for the position you want and deserve. 
                          </p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/linkedin-profile-add-on'>
                          <Button size='large' className={'primary-sub'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Card.Content textAlign='center' className={'card-header_mobile'}>
                        <Header as='h3'>Executive Biography Add-on</Header>
                        <Card.Meta>
                          <Statistic horizontal>
                            <Statistic.Value>$179.95</Statistic.Value>
                            <Statistic.Label>/per doc</Statistic.Label>
                          </Statistic>
                        </Card.Meta>
                      </Card.Content>
                      <Card.Content className={'card-content_mobile'}>
                        <Segment basic>
                          <p>
                            I will focus on critical career-defining milestones and weave your personal value, leadership philosophy, and vision into a marketing piece, helping you attract the attention of top-tier employers. 
                            <br/>
                            You will receive a strategically written bio that is reverse engineered with YOUR GOAL in mind. 
                          </p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/executive-biography-add-on'>
                          <Button size='large' className={'primary-sub'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                  </Card.Group>

                }
              </div>
            </Fade>

            <Fade bottom>
              <div className={'pricing-body'}>
                <Header as='h2' textAlign='left' style={ mobile ? { fontSize: '24px' } : null}>
                  Combo Packages
                </Header>

                {

                  !mobile ?

                  <Card.Group className={'package-cards combo'} itemsPerRow={3}>
                    <Card>
                      <div className={'background-placeholder blue'}>
                      </div>
                      <Card.Content>
                        <Card.Header textAlign='center'>Professional Level Combo</Card.Header>
                      </Card.Content>
                      <Card.Content textAlign='center'>
                        <Statistic horizontal>
                          <Statistic.Value><span className={'level-cut'}>$579.85</span> $560</Statistic.Value>
                          <Statistic.Label>/per doc</Statistic.Label>
                        </Statistic>
                      </Card.Content>
                      <Card.Content>
                        <Segment basic>
                          <p>Resume rewrite + LinkedIn Update + Biography add-on</p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/professional-level-combo'>
                          <Button size='large' className={'primary-sub'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                    <Card>
                      <div className={'background-placeholder blue'}>
                      </div>
                      <Card.Content>
                        <Card.Header textAlign='center'>IT Level Combo</Card.Header>
                      </Card.Content>
                      <Card.Content textAlign='center'>
                        <Statistic horizontal>
                          <Statistic.Value><span className={'level-cut'}>$609.85</span> $580</Statistic.Value>
                          <Statistic.Label>/per doc</Statistic.Label>
                        </Statistic>
                      </Card.Content>
                      <Card.Content>
                        <Segment basic>
                          <p>Resume Rewrite + LinkedIn Update + Biography add-on</p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/it-level-combo'>
                          <Button size='large' className={'primary-sub'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                    <Card>
                      <div className={'background-placeholder blue'}>
                      </div>
                      <Card.Content>
                        <Card.Header textAlign='center'>Executive Level Combo</Card.Header>
                      </Card.Content>
                      <Card.Content textAlign='center'>
                        <Statistic horizontal>
                          <Statistic.Value><span className={'level-cut'}>$629</span> $600</Statistic.Value>
                          <Statistic.Label>/per doc</Statistic.Label>
                        </Statistic>
                      </Card.Content>
                      <Card.Content>
                        <Segment basic>
                          <p>
                            Resume rewrite + LinkedIn Update + Biography add-on
                          </p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/executive-level-combo'>
                          <Button size='large' className={'primary-sub'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                  </Card.Group>

                  :

                  <Card.Group className={'package-cards mobile'} itemsPerRow={1}>
                    <Card>
                      <Card.Content textAlign='center' className={'card-header_mobile'}>
                        <Header as='h3'>Professional Level Combo</Header>
                        <Card.Meta>
                          <Statistic horizontal>
                            <Statistic.Value><span className={'level-cut'}>$579.85</span> $560</Statistic.Value>
                            <Statistic.Label>/per doc</Statistic.Label>
                          </Statistic>
                        </Card.Meta>
                      </Card.Content>
                      <Card.Content className={'card-content_mobile'}>
                        <Segment basic>
                          <p>
                            Resume rewrite + LinkedIn Update + Biography add-on
                          </p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/professional-level-combo'>
                          <Button size='large' className={'primary-sub'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Card.Content textAlign='center' className={'card-header_mobile'}>
                        <Header as='h3'>IT Level Combo</Header>
                        <Card.Meta>
                          <Statistic horizontal>
                            <Statistic.Value><span className={'level-cut'}>$609.85</span> $580</Statistic.Value>
                            <Statistic.Label>/per doc</Statistic.Label>
                          </Statistic>
                        </Card.Meta>
                      </Card.Content>
                      <Card.Content className={'card-content_mobile'}>
                        <Segment basic>
                          <p>
                            Resume Rewrite + LinkedIn Update + Biography add-on
                          </p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/it-level-combo'>
                          <Button size='large' className={'primary-sub'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Card.Content textAlign='center' className={'card-header_mobile'}>
                        <Header as='h3'>Executive Level Combo</Header>
                        <Card.Meta>
                          <Statistic horizontal>
                            <Statistic.Value><span className={'level-cut'}>$629</span> $600</Statistic.Value>
                            <Statistic.Label>/per doc</Statistic.Label>
                          </Statistic>
                        </Card.Meta>
                      </Card.Content>
                      <Card.Content className={'card-content_mobile'}>
                        <Segment basic>
                          <p>
                            Resume rewrite + LinkedIn Update + Biography add-on
                          </p>
                        </Segment>
                      </Card.Content>
                      <Card.Content textAlign='center' extra>
                        <Link to='/payment/executive-level-combo'>
                          <Button size='large' className={'primary-sub'}>Use This Package</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                  </Card.Group>
                }
              </div>
            </Fade>

            <br/>
            <p>
              *Note - Each package comes with free cover letter and interview follow-up letter
            </p>
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Packages