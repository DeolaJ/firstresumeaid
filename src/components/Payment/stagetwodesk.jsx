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
      <Grid.Column width={16} style={{ padding: '0' }}>
        <Grid columns={2} className={'stagetwo-row'}>
          <Grid.Column className={'activecolumn_left'}>
            <Container className={'checkout-form desktop'}>
              <div className={'cancel-request'}>
                <span onClick={prevStage}>
                  <Icon name='chevron left' />Cancel Request
                </span>
              </div>
              <div className={'package-info'}>
                <Header as='h2'>
                  {(activePackage.length > 1) ? activePackage.join(' & ') : activePackage}
                  {
                    !this.state.discountedamount 

                    ?
                    <Header.Subheader>${totalPrice}</Header.Subheader>

                    :
                    <Header.Subheader><span style={{ marginRight: '2em', textDecoration: 'line-through', color: '#777' }} >${totalPrice}</span><span style={{ fontWeight: '800' }}>${this.state.discountedamount}</span></Header.Subheader>
                  }
                </Header>
              </div>
            </Container>
          </Grid.Column>
          <Grid.Column style={{ padding: '0'}}>
            <Container className={'checkout-form desktop'}>
              <Header as='h1'>
                Checkout
              </Header>
              <CheckoutForm prices={prices} activePackage={activePackage} db={db} setNewAmount={this.setNewAmount} finalStep={finalStep} discountedamount={this.state.discountedamount} amount={amount} unload={this.unloadForm} />
            </Container>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    )
  }
}

export default StageTwoDesk