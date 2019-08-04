import React, {Component} from 'react'
import { Grid, Container, Header, Icon } from 'semantic-ui-react'
import CheckoutForm from './form'

class StageTwoDesk extends Component {

  constructor (props) {
    super (props)
    this.state = {
      discountedamount: null
    }
    this.onUnload = this.onUnload.bind(this)
  }

  onUnload(event) { // the method that will be used for both add and remove event
      console.log("hellooww")
      event.returnValue = "Hellooww"
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.onUnload)
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.onUnload)
  }

  unloadForm = () => {
    window.removeEventListener("beforeunload", this.onUnload)
  }

  setNewAmount = (newAmount) => {
    this.setState({
      discountedamount: newAmount
    })
  }

  render () {

    const { prices, activePackage, prevStage, db, totalPrice, finalStep } = this.props
    
    var amount = this.state.discountedamount ? this.state.discountedamount : totalPrice

    return (
      <Grid.Column width={16} style={{ padding: '0'}} className={'stagetwo-mobile'}>
        <Grid style={{ padding: '1em 0' }}>
          <Grid.Row columns={2}>
            <Grid.Column textAlign='left' verticalAlign='middle'>
              <div className={'cancel-request-mobile'}>
                <span onClick={prevStage}>
                  <Icon name='chevron left' />Cancel Request
                </span>
              </div>
            </Grid.Column>

            <Grid.Column textAlign='right' verticalAlign='middle'>
              <Header as='h4'>
                {(activePackage.length > 1) ? activePackage.join(' & ') : activePackage}
                {
                  !this.state.discountedamount 

                  ?
                  <Header.Subheader>${totalPrice}</Header.Subheader>

                  :
                  <Header.Subheader><span style={{ marginRight: '2em', textDecoration: 'line-through', color: '#777' }} >${totalPrice}</span><span style={{ fontWeight: '800' }}>${this.state.discountedamount}</span></Header.Subheader>
                }
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Container className={'checkout-form'}>
          <Header as='h1'>
            Checkout
          </Header>
          <CheckoutForm prices={prices} activePackage={activePackage} db={db} setNewAmount={this.setNewAmount} finalStep={finalStep} discountedamount={this.state.discountedamount} amount={amount} unload={this.unloadForm} />
        </Container>
      </Grid.Column>
    )
  }
}

export default StageTwoDesk
