import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import { connect } from "react-redux";

import {User, Admin} from './pages'

import './styles/app.scss'

function App(props) {
  const { isAuth } = props; 
  return (
    <div className="App">
      <Switch>
        <Route exact path={['/', '/store', '/cart']} component={User}/>
        <Route path='signin' component={Admin}/>
        <Route exact path='/admin-data' component={Admin}/>
      </Switch>
    </div>
  );
}

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);