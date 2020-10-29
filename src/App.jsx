import React from 'react';

import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
// import {HomeOutlined,UserOutlined,ShoppingCartOutlined} from '@ant-design/icons'

// import { Layout,Menu,Row,Col,Button } from 'antd';

import Cake from './views/Cake'
import Cart from './views/Cart'
import Choiceness from './views/Choiceness'
import Home from './views/Home'
import Login from './views/Login'
import Potfoods from './views/Potfoods'
import Reg from './views/Reg'
import Details from './views/Details'
import My from './views/My'

import 'antd-mobile/dist/antd-mobile.css';
import './App.scss'
import './assets/fonts/iconfont'


@withRouter
class App extends React.Component {
    state = {
        menu: [{
            text: '精选',
            path: '/choiceness',
            name: 'choiceness',
            component: Choiceness
        }, {
            text: '首页',
            path: '/home',
            name: 'home',
            component: Home,
            // icon: <HomeOutlined />
        },
        {
            text: '蛋糕',
            path: '/cake',
            name: 'cake',
            component: Cake
        }, 
        {
            text: '小食',
            path: '/potfoods',
            name: 'potfoods',
            component: Potfoods,
            // icon: <FastForwardOutlined />
        }, {
            text: '购物车',
            path: '/cart',
            name: 'cart',
            component: Cart,
            // icon:ShoppingCartOutlined
        }],

        current: '/home'
    }
    render(){
        const{ menu } = this.state;
        return (
            <div>
                {/* <nav>
                    <ul className="tarbar">
                        {
                            menu.map(item=><li key={item.name}> <NavLink activeClassName="active" to={item.path}>{item.text}</NavLink></li>)
                        }
                    </ul>
                </nav> */}
                
                <Switch>
                    
                    <Route path='/cake' component={Cake} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/choiceness' component={Choiceness} />
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