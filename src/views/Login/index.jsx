import React from 'react';
import CryptoJS, { RC4Drop } from 'crypto-js'
import { Route, NavLink, withRouter } from 'react-router-dom';
import { List, InputItem, WhiteSpace, Icon, Grid, } from 'antd-mobile';
import { createForm } from 'rc-form';

import './style.scss';
import Header from '../../components/Head/LoginHead';

// import { withAuth, withUser } from '../../utils/hoc';
import request from '../../utils/request';

// ES7的装饰器写法
// @withAuth
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
            pasIsok:false
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
            this.setState({
                phoneIsok: false
            })
            alert('请填写正确的手机号码');
        } else{
            // 发送请求验证手机号码是否已经注册
                request.get('user/checkname',{
                    params: {
                        name:phone
                        
                    }
                }).then(res=>{
                    if(res.data.code){
                        alert('该号码未注册，请去注册');
                        this.setState({
                            phoneIsok: false
                        })
                    } else {
                        this.setState({
                            phoneIsok: true
                        })
                    }
                
                })
        }
    }

    // 验证密码不能为空
    checkPassword = () => {
        let password = this.password.state.value
        if(password === "") {
            this.setState({
                pasIsok: false
            })
            alert('密码不能为空')
        } else {
            this.setState({
                pasIsok: true
            })
        }
    }

// 验证用户登录
    goLogin = () => {
        let phone = this.phone.state.value.replace(/\s*/g, "");
        let password = this.password.state.value.replace(/\s*/g, "");
        let phoneIsok = this.state.phoneIsok;
        let pasIsok = this.state.pasIsok;
        // console.log(phone, password,phoneIsok,pasIsok)
    //验证号码密码是否正确
        if(phone && password && phoneIsok && pasIsok) {
            password = CryptoJS.SHA256(password).toString();
            
            // alert('登录成功')
            request.get('user/login',{
                params: {
                    name:phone,
                    password:password
                }

            }).then(res=>{
                if(res.data.code){
                    console.log('登录成功')
                    // console.log(111,res.data.code);
                    this.props.history.push({//登录成功后跳转页面并传参
                        pathname:'/my',
                        query: { username:phone}
                    })
                    localStorage.setItem('currentUser',JSON.stringify({'username':phone,'password':password}))
                    // localStorage.setItem('currentUser',JSON.stringify({'username':phone,'password':password}))//将用户信息存储
                } else {
                    // console.log(222,res.data.code)
                    alert('手机号码或者密码错误');
                }
            
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
                        // text={this.props.currentUser}
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