import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { List, InputItem, WhiteSpace, Icon, Grid, } from 'antd-mobile';
import { createForm } from 'rc-form';

import './style.scss';
import Header from '../../components/Head/LoginHead';

import { withAuth, withUser } from '../../utils/hoc';

// ES7的装饰器写法
@withAuth
class BasicInputExample extends React.Component {
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    // handleClick = () => {
    // this.inputRef.focus();
    // }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="login">
                {/* 顶部 */}
                <Header />
                {/* <div className="header">
            <NavLink className="headerLeft" to="" >
              <Icon className="headerLeft_ico" type="left" size={ 'lg' } />
            </NavLink>
            <NavLink className="headerCentre" to="" >
              <img className="headerLeft_img" src="../img/login/header_log.png" />
            </NavLink>
            <div className="headerRight">
              <NavLink to="">
                <img src="../img/login/header_cart.png" />
              </NavLink>
              <span>|</span>
              <NavLink to=''>
                <img src="../img/login/header_mine.png" />
              </NavLink>
            </div>
          </div> */}


                <div className="main">
                    <List className="Format" renderHeader={() => ' '}>
                        <h4>欢迎登录Mcake</h4>


                        <InputItem className="mainInput"{...getFieldProps('phone')} type="phone" placeholder="请输入手机号码"
                        >
                            <img className="mainInput_phone" src="../img/login/login_phone.png" />
                        </InputItem>
                        <InputItem className="mainInput"
                            {...getFieldProps('password')}
                            type="password"
                            placeholder="请输入密码"
                        >
                            <img className="mainInput_lock" src="../img/login/login_lock1.png" />
                        </InputItem>

                        {/* 注册|忘记密码 */}
                        <div className="mainReg">
                            <NavLink to='/reg'>
                                <h6>立即注册</h6>
                            </NavLink>
                            <span>|</span>
                            <NavLink to=''>
                                <h6>忘记密码</h6>
                            </NavLink>
                        </div>

                        {/* 其他登录方式 */}
                        <div className="mainOther">
                            <p>其他登录方式</p>
                            <span>
                                <img src="../img/login/login_alipay.png" />
                                <img src="../img/login/login_weibo.png" />
                            </span>
                        </div>

                        {/* 登录按钮 */}
                        <div className="loginBtn">
                            <span>立即登录</span>
                        </div>



                    </List>
                </div>

                {/* <WhiteSpace className='WhiteSpace' /> */}

            </div>

        );
    }
}

const Login = createForm()(BasicInputExample);
// ReactDOM.render(<Login />, BasicInputExample);



export default Login;