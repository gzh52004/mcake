import React from 'react';
import CryptoJS, { RC4Drop } from 'crypto-js'
import { Route, NavLink, withRouter } from 'react-router-dom';
import { List, InputItem, WhiteSpace, Toast, WingBlank, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
// import request from '@/src/utils/request';


import './style.scss';
import Header from '../../components/Head/LoginHead';

import { withAuth, withUser } from '../../utils/hoc';
import request from '../../utils/request';


// function showToastNoMask() {
//     Toast.info('信息错误', 2, null, false);
//   }

// ES7的装饰器写法
@withAuth
class BasicInputExample extends React.Component {

    constructor()
{
    super()
    this.state = {//初始化数据
        phone: '请输入您的手机号码',
        text: '图片验证码',
        password: '请设置您的密码',
        passwordConfirm: '请再次确认密码',
        phoneIsok: false,//电话号码通过与否
        textIsok: false,//验证码通过与否
        passwordIsok: false,
        pasConfirmIsok: false,
        value:false,

    }
}



    //获取手机号码数据
    handleSubmit = e => {
        e.preventDefault();
        const changePhone = this.phone.state.value;
        // console.log("reg",changePhone); 
    }
    //验证手机号码正则和是否可注册
    checkPhone = () => {
        var phone = this.phone.state.value.replace(/\s*/g, "");//去除空格
        let reg = /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/;
        
        if (reg.test(phone)) {//判断手机正则
            //手机号码正确
            // console.log(666)
            
    // 手机验证成功后发送请求验证号码是否重复
    request.get('user/checkname',{
        params: {
            name:phone
            
        }
    }).then(res=>{
        if(res.data.code){
            this.state.phoneIsok=true
            // alert('此号码可以注册');
            // console.log(this.state.phoneIsok,999)
        }else{
            this.state.phoneIsok=false
            alert('该号码已被注册，请重新填写');
        }
    })
        } else {
            // showToastNoMask()
            // console.log(this)
            // console.log(666)
            alert('请填写正确的手机号码');
        }

    }

    //获取验证码数据
    handleSubmit = e => {
        e.preventDefault();
        let changeText = this.text.state.value;
        // console.log("reg",changeText); 
    }
    //验证验证码
    checkText = () => {
        if (this.text.state.value == '4yekq') {
            // console.log(666)
            this.setState({
                textIsok: true
            })
        } else {
            alert('请填写正确的验证码');
        }
    }

    // 验证密码
    handleSubmit = e => {
        e.preventDefault();
        let changepassword = this.password.state.value;
        // console.log("reg",changepassword); 
    }
    checkpassword = () => {
        let passwordRule = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/
        let userPassword = this.password.state.value;
        // console.log(this.password.state.value)
        if (passwordRule.test(userPassword)) {
            this.setState({
                passwordIsok: true
            })
        } else {
            alert('请填写正确的密码');
            return;
        }
    }

    //检验确认密码passwordConfirm
    handleSubmit = e => {
        e.preventDefault();
        let changepassword = this.password.state.value;
        // console.log("reg", changepassword);
    }
    checkPasswordConfirm = () => {
        let passwordConfirm = this.passwordConfirm.state.value;
        if (passwordConfirm === this.password.state.value) {
            this.setState({
                pasConfirmIsok: true
            })
        } else {
            alert('两次密码不一致');
        }
    }

    // 勾选协议
    handleSubmit = e => {
        e.preventDefault();
        let checkBox = this.checkBox;
        // console.log("reg",checkBox); 
    }
    changeBox = () => {
        this.setState({//点击value取反
            value: !this.state.value
        },()=>{
            // console.log(this.state.value);
        })

    }

    // 当所有信息都通过后进行密码加密并且提交信息
    checkReg = () => {
        if(this.state.value === false) {
            alert('请勾选协议')
        } else if(this.state.phoneIsok && this.state.textIsok && this.state.passwordIsok && this.state.pasConfirmIsok && this.state.value) {
            // console.log(this.password)
            this.name = this.phone.state.value.replace(/\s*/g, "")
            // console.log(this.name)
            this.password = CryptoJS.SHA256(this.password).toString();
            // console.log('加密后=', this.password);
            // 当所有检验通过后向数据库添加用户信息
            request.post('user/regist',"name=" + this.name + "&password=" + this.password
            ).then(res=>{
                if(res.data.code === 1){
                    alert('注册成功');
                    this.props.history.push({//注册成功后跳转页面并传参
                        pathname:'/login',
                        query: { username:this.name}
                    })
                    localStorage.setItem('currentUser',JSON.stringify(this.name))//将用户信息存储
                } else{
                    alert('该号码已被注册，请重新填写');
                }
            })
        }
        else {
            alert('手机号码或密码不符合规范，请重新输入');
            return;
        }
    }


    render() {
        const { getFieldProps } = this.props.form;
        // console.log(this.props.form);
        const { phone, text, password, passwordConfirm } = this.state
        // console.log(phone)
        return (
            <div className="reg">
                {/* 顶部 */}
                <Header />

                <div className="main">
                    <List className="Format"
                        renderHeader={() => ' '}
                    >
                        {/* <h4>欢迎登录Mcake</h4> */}

                        {/* phone */}
                        <InputItem id="checkPhone"
                            className="mainInput"{...getFieldProps('phone')}
                            type="phone"
                            placeholder={phone}
                            onBlur={this.checkPhone}
                            ref={el => this.phone = el}
                        >
                            <img className="mainInput_phone" src="../img/login/login_phone.png" />
                        </InputItem>

                        {/* text */}
                        <InputItem className="mainInput_text"
                            type="text"
                            placeholder={text}
                            onBlur={this.checkText}
                            ref={el => this.text = el}
                        >
                            <img className="mainInput_verify" src="../img/reg/reg_verify.png" />
                        </InputItem>
                        <img className="mainInput_img" src="../img/reg/reg_verifyImg.png " />

                        {/* password */}
                        <InputItem className="mainInput"
                            type="password"
                            placeholder={password}
                            onBlur={this.checkpassword}
                            ref={el => this.password = el}
                        >
                            <img className="mainInput_lock" src="../img/login/login_lock1.png" />
                        </InputItem>
                        <span className="lock_length">
                            密码长度应为8～20个字符，同时包含大小写字母、数字
                        </span>

                        {/* passwordConfirm */}
                        <InputItem className="mainInput_again"
                            {...getFieldProps('password')}
                            type="password"
                            placeholder={passwordConfirm}
                            onBlur={this.checkPasswordConfirm}
                            ref={el => this.passwordConfirm = el}
                        >
                            <img className="mainInput_lock" src="../img/login/login_lock1.png" />
                        </InputItem>

                        <div className="reg_agree">
                            <span> 
                                <input 
                                    className='reg_checkbox' 
                                    type="checkbox"
                                    value={this.state.value}
                                    ref={el => this.checkBox = el}
                                    onClick={this.changeBox}
                                />
                            </span>
                            <span> 同意 </span>
                            <span>《MCAKE购物协议》</span>
                        </div>

                        <div className="goto_login">
                            <NavLink className="goto" to="/login"> 已有账号，立即登录 </NavLink>
                        </div>

                        {/* 注册按钮 */}
                        <div className="regBtn"
                            // ref= {el => this.reg = el} 
                            
                            onClick={this.checkReg}
                            ref={el => this.reg = el}
                        >
                            <span>立即注册</span>
                        </div>



                    </List>
                </div>

                <WhiteSpace className='WhiteSpace' />

            </div>

        );
    }
}

const Reg = createForm()(BasicInputExample);
export default Reg;