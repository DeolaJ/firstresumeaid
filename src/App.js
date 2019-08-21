import React, { Component } from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
// import Homepage from './components/Homepage/homepage'
// import Payment from './components/Payment/payment'
// import ErrorPage from './components/ErrorPage/errorpage'
// import Transactions from './components/Transactions/transactions'
// import VerifyPage from './components/VerifyPage/verifypage'
import Loadable from 'react-loadable';
import LoaderHome from './components/Loader/loader-home'
// import Loader from './components/Loader/loader'

const HomepageLoadable = Loadable({
  loader: () => import('./components/Homepage/homepage'),
  loading() {
    return <LoaderHome />
  }
});

const PaymentLoadable = Loadable({
  loader: () => import('./components/Payment/payment'),
  loading() {
    return <LoaderHome />
  }
});

const TransactionsLoadable = Loadable({
  loader: () => import('./components/Transactions/transactions'),
  loading() {
    return <LoaderHome />
  }
});

const VerifyLoadable = Loadable({
  loader: () => import('./components/VerifyPage/verifypage'),
  loading() {
    return <LoaderHome />
  }
});

const ErrorLoadable = Loadable({
  loader: () => import('./components/ErrorPage/errorpage'),
  loading() {
    return <LoaderHome />
  }
});
class App extends Component {

 
  render () {
    
    return (
      <div className={'body'}>

        <Router basename={'/'}>
          <Switch>
            <Route exact path={'/'} component={HomepageLoadable} />
            <Route path={'/payment/:activePackage'} component={PaymentLoadable} />
            <Route path={'/payment'} component={PaymentLoadable} />
            <Route path={'/transactions'} component={TransactionsLoadable} />
            <Route path={'/verify/:reference'} component={VerifyLoadable} />
            <Route component={ErrorLoadable} />
          </Switch>
        </Router>
        
      </div>
    )
  }
}

export default App;
