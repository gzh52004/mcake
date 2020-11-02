import React from 'react';
import { ActionSheet, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';
import { withAuth, withUser } from '../../utils/hoc'

import './style.scss';
import Header from '../../components/Head/LoginHead';
import { NavLink } from 'react-router-dom';

// console.log(withAuth)
// ES7的装饰器写法
@withAuth
class My extends React.Component{
    componentDidMount() {

      }

      constructor()
      {
          super();
          this.state = {//初始化数据
            datalist: [
              {
                id:1,
                name:"我的订单",
                url:"../img/my/user-icon-1.png",
              },
              {
                id:2,
                name:"待付款",
                url:"../img/my/user-icon-2.png",
              },
              {
                id:3,
                name:"待收货",
                url:"../img/my/user-icon-3.png",
              },
              {
                id:4,
                name:"会员等级",
                url:"../img/my/user-icon-4.png",
              },
              {
                id:5,
                name:"积分",
                url:"../img/my/user-icon-5.png",
              },
              {
                id:6,
                name:"余额",
                url:"../img/my/user-icon-6.png",
              },
              {
                id:7,
                name:"红包/优惠券",
                url:"../img/my/user-icon-7.png",
              },
              {
                id:8,
                name:"现金卡",
                url:"../img/my/user-icon-8.png",
              },
            ]
          }
      }
      
    render(){
      const { datalist } = this.state;
      // console.log(datalist[0].url)
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
                    15119802074
                      {/* {this.props.currentUser[0]} */}
                    </p>
                    <NavLink to="/login" className="change">切换账号</NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list">
                <div className="listBox">
                  <div className="listImg" >
                    {/* <img src="../img/my/user-icon-1.png" />  */}
                    <img src={this.state.datalist[0].url} />
                  </div>
                  <span className="listText">
                    {this.state.datalist[0].name}
                    {/* 我的订单 */}
                  </span>
                </div>
                <div className="listBox">
                  <div className="listImg" >
                    {/* <img src="../img/my/user-icon-1.png" />  */}
                    <img src={this.state.datalist[1].url} />
                  </div>
                  <span className="listText">
                    {this.state.datalist[1].name}
                    {/* 我的订单 */}
                  </span>
                </div>
                <div className="listBox">
                  <div className="listImg" >
                    {/* <img src="../img/my/user-icon-1.png" />  */}
                    <img src={this.state.datalist[2].url} />
                  </div>
                  <span className="listText">
                    {this.state.datalist[2].name}
                    {/* 我的订单 */}
                  </span>
                </div>
                <div className="listBox">
                  <div className="listImg" >
                    {/* <img src="../img/my/user-icon-1.png" />  */}
                    <img src={this.state.datalist[3].url} />
                  </div>
                  <span className="listText">
                    {this.state.datalist[3].name}
                    {/* 我的订单 */}
                  </span>
                </div>
                
              </div>
              
            </div>
        )
    }
}

// My = withAuth(My);

export default My;