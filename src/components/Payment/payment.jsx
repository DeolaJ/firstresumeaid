import React, { PureComponent } from 'react'
import { Grid, Button, Container, Icon, Dropdown, Header, Divider, Table, Step } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './payment.scss'
import StageTwoDesk from './stagetwodesk'
import StageTwoMobile from './stagetwomobile'
// import Firebase from 'firebase'
// import config from '../../config'
import firebase from '../../firebase'
import Aux from '../../hoc/Aux'

class Payment extends PureComponent {

  constructor (props) {
    super (props)
    this.state = {
      stageOne: true,
      stageTwoDesk: false,
      stageTwoMobile: false,
      stageThree: false,
      mobile: null,
      activePackage: [],
      db: {},
      resumeOptions: [
        {
          id: 'student-level',
          text: 'Student level',
          value: 'Student level'
        },
        {
          id: 'it-level',
          text: 'IT level',
          value: 'IT level'
        },
        {
          id: 'professional-level',
          text: 'Professional level',
          value: 'Professional level'
        },
        {
          id: 'executive-level',
          text: 'Executive level',
          value: 'Executive level'
        },
        {
          id: 'linkedin-profile-add-on',
          text: 'LinkedIn profile add-on',
          value: 'LinkedIn profile add-on'
        },
        {
          id: 'executive-biography-add-on',
          text: 'Executive biography add-on',
          value: 'Executive biography add-on'
        },
      ]
    }
  }

  componentDidMount () {
    const { match } = this.props
    const { activePackage } = match.params
    var mobile = this.state.mobile;
    window.addEventListener("resize", this.updateValue)
    var db = firebase.firestore()
    if (!mobile) {
      const body = document.querySelector('.payment-container').clientWidth
      mobile = body <= 768 ? true : false
      this.setState({
        mobile,
        db
      })
    }

    if (activePackage) {
      var resume = this.state.resumeOptions
      var result = resume.filter(obj => {
        return obj.id === activePackage
      })
      var active = result[0].value

      this.setState(prevState => ({
        stageOne: false,
        stageTwoMobile: mobile ? true : false,
        stageTwoDesk: mobile ? false : true,
        activePackage: prevState.activePackage.concat(active)
      }))
    }
  }

  finalStep = () => {
    this.setState({
      stageThree: true
    })
  }

  getDropdownValue = (event, {value}) => {
    this.setState( prevState => ({
      activePackage: prevState.activePackage.includes(value) ? prevState.activePackage : prevState.activePackage.concat(value)
    }))
  }

  nextStage = (mobile) => () => {
  
    this.setState( prevState => ({
      stageOne: false,
      stageTwoMobile: mobile ? true : false,
      stageTwoDesk: mobile ? false : true
    }))
  }

  prevStage = () => {
    this.setState({
      stageOne: true,
      stageTwoMobile: false,
      stageTwoDesk: false
    })
  }

  removePackage = (anypackage) => () => {
    const { activePackage } = this.state
    var filtered = activePackage.filter(function(value, index, arr){
      return value !== anypackage;
    })
    this.setState({
      activePackage: filtered
    })
  }

  updateValue = () => {
    const body = document.querySelector('.payment-container').clientWidth
    const mobile = body <= 768 ? true : false
    this.setState( prevState => ({
      mobile: mobile,
      stageTwoDesk: (!prevState.stageOne && !mobile) ? true : false,
      stageTwoMobile: (!prevState.stageOne && mobile) ? true : false
    }))
  }
    
  componentWillMount () {
    window.removeEventListener("resize", this.updateValue)
  }

  render () {

    const prices = {
      'Student level': '199.95',
      'IT level': '279.95',
      'Professional level': '249.95',
      'Executive level': '299.95',
      'LinkedIn profile add-on': '149.95',
      'Executive biography add-on': '179.95',
    }

    const { stageOne, stageTwoDesk, stageTwoMobile, activePackage, mobile, resumeOptions, stageThree } = this.state
    const { db } = this.state
    let totalPrice = (activePackage.length > 0) && activePackage.reduce((total, activePackage) => {
      return Number((total + Number(prices[activePackage])).toFixed(2))
    }, 0)
    console.log(this.state)
    return (
      <Grid className={'payment-container'}>

        <Step.Group className={'payment-steps unstackable'} style={( stageTwoDesk) ? { transform: 'translateX(-50%)', left: '50%', top: '3em', marginLeft: '-.5em', width: 'calc(100% - 4em)' } : ((stageTwoMobile || mobile )? { width: '100%', transform: 'translateX(-50%)', left: '50%', top: '5.6em' } : null)} widths={3}>
          <Step active={stageOne} completed={stageTwoDesk || stageTwoMobile}>
            <Step.Content>
              <Step.Title>{mobile ? <span>1<br/>Package</span> : '1. Select Package'}</Step.Title>
            </Step.Content>
          </Step>
          <Step active={stageTwoDesk || stageTwoMobile} completed={stageThree}>
            <Step.Content>
              <Step.Title>{mobile ? <span>2<br/>Info</span> : '2. Personal Information'}</Step.Title>
            </Step.Content>
          </Step>
          <Step active={stageThree}>
            <Step.Content>
              <Step.Title>{mobile ? <span>3<br/>Pay</span> : '3. Pay'}</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        {
          stageOne &&

          <Grid.Column width={16} className={'stageone-row'}>
            <div className={'return-link'}>
              <Link to='/'>
                <Icon name='chevron left' /> Return to Home
              </Link>
            </div>
            <Container className={'first-stage'}>
              <Header as='h2' style={{ color: 'white' }}>
                Select your order
              </Header>
              <Divider/>
              <div className={'first-step'}>
                <Dropdown
                    placeholder='Select Package'
                    as={ mobile ? 'h4' : 'h3' }
                    selection
                    options={resumeOptions}
                    scrolling
                    onChange={this.getDropdownValue}
                  />
              </div>
            </Container>
            {
              !(activePackage.length === 0) &&

              <Aux>
                <Container className={'order-list'}>
                  <Table basic className={'order-table unstackable'} size='large'>
                    <Table.Header style={{ color: 'white' }}>
                      <Table.Row>
                        <Table.HeaderCell>Package List</Table.HeaderCell>
                        <Table.HeaderCell textAlign="right">($) Price</Table.HeaderCell>
                        <Table.HeaderCell width={2}></Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>


                    <Table.Body>

                      {
                        activePackage.map(activePackage => (
                          <Table.Row key={activePackage}>
                            <Table.Cell>{activePackage}</Table.Cell>
                            <Table.Cell textAlign="right">$ {prices[activePackage]}</Table.Cell>
                            <Table.Cell width={2} textAlign="right"><Button size="tiny" color='red' onClick={this.removePackage(activePackage)}>{mobile ? <Icon name='trash' /> : 'Remove'}</Button></Table.Cell>
                          </Table.Row>
                        ))
                      }

                      <Table.Row style={{ height: '4.5em' }}></Table.Row>
                      <Table.Row>
                        <Table.Cell style={{ fontWeight: 'bolder' }}>Total</Table.Cell>
                        <Table.Cell style={{ fontWeight: 'bolder' }} textAlign="right">$ {totalPrice}</Table.Cell>
                        <Table.Cell width={2}></Table.Cell>
                      </Table.Row>
                      
                    </Table.Body>
                  </Table>

                </Container>

                <Container textAlign='right' style={{ marginTop: '1em'}}>
                  <Button size={ mobile ? 'small' : 'large'} className={'primary-sub'} onClick={this.nextStage(mobile)} >Proceed to checkout</Button>
                </Container>
              </Aux>
            }
          </Grid.Column>

        }

        {
          stageTwoDesk &&

          <StageTwoDesk prevStage={this.prevStage} totalPrice={totalPrice} activePackage={activePackage} finalStep={this.finalStep} db={db} prices={prices} />
        }

        {
          stageTwoMobile &&

          <StageTwoMobile prevStage={this.prevStage} totalPrice={totalPrice} activePackage={activePackage} finalStep={this.finalStep} db={db} prices={prices} />
        }

      </Grid>
    )
  }
}

export default Payment
