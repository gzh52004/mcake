
import React from 'react';

import {  NavLink } from 'react-router-dom';

import { Icon } from 'antd-mobile';

import './style.scss';

class Header extends React.Component{
	render(){
		return (
    <div>
      <div className="header">
          <NavLink className="headerLeft" to="" >
            <Icon className="headerLeft_ico" type="left" size={ 'lg' } />
          </NavLink>
          <NavLink className="headerCentre" to="" >
            <img className="headerLeft_img" src="../img/LoginHead/header_log.png" />
          </NavLink>
          <div className="headerRight">
            <NavLink to="/Cart">
              <img src="../img/LoginHead/header_cart.png" />
            </NavLink>
            <span>|</span>
            <NavLink to=''>
              <img src="../img/LoginHead/header_mine.png" />
            </NavLink>
          </div>
        </div>
    </div>)
	}
}
 
export default Header;
