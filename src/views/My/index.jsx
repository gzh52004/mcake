import React from 'react';
import { ActionSheet, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';
import { withAuth, withUser } from '../../utils/hoc'

import './style.scss';
import Header from '../../components/Head/LoginHead';
import { NavLink } from 'react-router-dom';


// ES7的装饰器写法
@withAuth
class My extends React.Component{
    componentDidMount() {
      console.log(this)
      }
      
    render(){
        return(
            <div className="my">
              {/* 顶部 */}
              <Header />
              <div className="main">
                <div className="topheader">
                  <div className="mainContent">
                    <div className="ico">
                      <span className="iconfont icon-my">
                        </span>
                    </div>
                    <div className="text">
                    <p className="id"> 
                      {this.props.currentUser[0]}
                    </p>
                    <NavLink to="/login" className="change">切换账号</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default My;