import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import { useSelector } from "react-redux";

import {User, Admin, SignIn} from './pages'

import './styles/app.scss'

function App() {
  const {isAuth} = useSelector(({user}) => user)
  return (
    <div className="App">
      <Switch>
        <Route exact path={['/', '/store', '/cart']} component={User}/>
        <Route exact path='/signin' render={() => !isAuth ? <SignIn/> : <Redirect to='/admin-data'/>}/>
        <Route path='/admin-data' render={() => isAuth ? <Admin/> : <Redirect to='signin'/>} />
      </Switch>
    </div>
  );
}

export default App;