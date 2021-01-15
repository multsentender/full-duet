import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {User, Admin} from './pages'

import './styles/app.scss'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={['/', '/store', '/cart']} component={User}/>
        <Route exact path='/admin' component={Admin}/>
      </Switch>
    </div>
  );
}

export default App;
