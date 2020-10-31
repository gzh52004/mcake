import React from 'react';
import CryptoJS, { RC4Drop } from 'crypto-js'
import { Route, NavLink, withRouter } from 'react-router-dom';
import { List, InputItem, WhiteSpace, Icon, Grid, } from 'antd-mobile';
import { createForm } from 'rc-form';

import './style.scss';
import Header from '../../components/Head/LoginHead';

import { withAuth, withUser } from '../../utils/hoc';
import request from '../../utils/request';

// ES7的装饰器写法
@withAuth
class BasicInputExample extends React.Component {
    componentDidMount() {
        // JSON.parse(localStorage.getItem('currentUser')).user.createUser
        // this.autoFocusInst.focus();

    }
    constructor()
    {
        super()
        this.state = {//初始化数据
            phone: '请输入您的手机号码',
            password: '请输入您的密码',
            phoneIsok:false,
        }
    }

    //获取手机号码数据
    handleSubmit = e => {
        e.preventDefault();
        const changePhone = this.phone.state.value;
        // console.log("reg",changePhone); 
    }
    // 获取密码数据
    handleSubmit = e => {
        e.preventDefault();
        let changepassword = this.password.state.value;
        // console.log("reg",changepassword); 
    }

// 验证用户名
    checkPhone = () => {
        var phone = this.phone.state.value.replace(/\s*/g, "");//去除空格
        let reg = /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/;
        if (!reg.test(phone)) {//判断手机正则
            this.state.phoneIsok=false
            alert('请填写正确的手机号码');
        } else{
            this.state.phoneIsok=true
        }
    }

    checkPassword = () => {
        console.log(phone)
        // var phone = this.phone.state.value.replace(/\s*/g, "")


        if(phone === "") {
            alert('密码不能为空')
            console.log(phone,666)
        }
    }



// 验证用户登录
    goLogin = () => {
        console.log(this)
    //验证手机号码正则和是否可注册
        if(this.state.phoneIsok) {
            let password = this.password.state.value;
            
            this.password = CryptoJS.SHA256(this.password).toString();
            console.log(this.password.state.value,this.phone.state.value,66)
            request.get('user/login',{
                // params: {
                    // name:this.phone.state.value,
                    // password:this.password.state.value,
                // }
            })
        }
    }


    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="login">
                {/* 顶部 */}
                <Header />

                <div className="main">
                    <List className="Format" renderHeader={() => ' '}>
                        <h4>欢迎登录Mcake</h4>


                        <InputItem className="mainInput"{...getFieldProps('phone')} type="phone" 
                        placeholder={this.state.phone}
                        onBlur={this.checkPhone}
                        ref={el => this.phone = el}
                        >
                            <img className="mainInput_phone" src="../img/login/login_phone.png" />
                        </InputItem>
                        <InputItem className="mainInput"
                            {...getFieldProps('password')}
                            type="password"
                            placeholder={this.state.password}
                            onBlur={this.checkPassword}
                            ref={el => this.password = el}
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
                        <div className="loginBtn" onClick={this.goLogin}>
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