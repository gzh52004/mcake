import React from 'react'
// import {withAuth, withUser} from '@/utils/hoc'
import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';

import './style.scss'

import Cake from '@/views/Cake'
import Cart from '@/views/Cart'
import Home from '@/views/Home'
import Choiceness from '@/views/Choiceness'
import Potfoods from '@/views/Potfoods'

@withRouter
class HomeTarbar extends React.Component {
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
    }
    render(){
        const{ menu } = this.state;
        console.log(menu);
        <div>
            <nav>
                <ul className="tarbar">
                    {
                        menu.map(item=><li key={item.name}> <NavLink activeClassName="active" to={item.path}>{item.text}</NavLink></li>)
                    }
                </ul>
            </nav>
        </div>
    }
}
export default HomeTarbar