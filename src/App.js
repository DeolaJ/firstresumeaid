import React, { Component } from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Homepage from './components/Homepage/homepage'
import Payment from './components/Payment/payment'
import ErrorPage from './components/ErrorPage/errorpage'
import Transactions from './components/Transactions/transactions'
import VerifyPage from './components/VerifyPage/verifypage'

class App extends Component {

 
  render () {
    
    return (
      <div className={'body'}>

        <Router basename={'/'}>
          <Switch>
            <Route exact path={'/'} component={Homepage} />
            <Route path={'/payment/:activePackage'} component={Payment} />
            <Route path={'/payment'} component={Payment} />
            <Route path={'/transactions'} component={Transactions} />
            <Route path={'/verify/:reference'} component={VerifyPage} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
        
      </div>
    )
  }
}

export default App;
