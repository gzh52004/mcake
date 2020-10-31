import React from 'react';

import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';

import Cake from './views/Cake'
import Cart from './views/Cart'
import Home from './views/Home'
import Login from './views/Login'
import Potfoods from './views/Potfoods'
import Reg from './views/Reg'
import Details from './views/Details'
import My from './views/My'

import 'antd-mobile/dist/antd-mobile.css';
import './App.scss'
import './assets/fonts/iconfont'

// @withRouter
class App extends React.Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route path='/cake' component={Cake} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/home' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/potfoods' component={Potfoods} />
                    <Route path='/reg' component={Reg} />
                    <Route path='/details' component={Details} />
                    <Route path='/my' component={My} />
                    <Route path="/notfound" render={() => <div>404</div>} />
                    <Redirect from='/' to='/home' exact />
                    <Redirect to="/notfound" />
                </Switch>
            </div>
        )
    }
}

export default App