import React from 'react';
import {Route} from 'react-router-dom'
import {Home, Store, Cart} from '../modules'
import {Header, Footer} from '../components'

const User = () => {
    return (
        <div>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/store' component={Store}/>
            <Route exact path='/cart' component={Cart}/>
            <Footer/>
        </div>
    )
}

export default User