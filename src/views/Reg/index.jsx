import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

import './style.scss';
import Header from '../../components/Head/LoginHead';

import { withAuth, withUser } from '../../utils/hoc';




// ES7的装饰器写法
@withAuth

class BasicInputExample extends React.Component {

        state = {//初始化数据
            phone:'请输入您的手机号码',
            text:'图片验证码',
            password:'请设置您的密码',
            passwordConfirm:'请再次确认密码',
            PhoneIsok:false,
        }

    // checkPhone(placeholder) {
    //     var phone = document.getElementById('checkPhone').placeholder;
    //     if(!(/^1[3456789]d{9}$/.changePhone)){ 
    //         alert('请填写正确的手机号码');
    //         return false;
    //     }
    // } 
    
    checkPhone = ()=> {
        var phone = this.text.state.value
        console.log(phone,111)
        let reg = /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/;
        if(phone =! reg && phone ===! ""){ 
            alert('请填写正确的手机号码');
            console.log(phone,222)
            //return checkPhone;
            // setState({
            //     checkPhone:true
            // }) 
        } else {
            this.setState({
                PhoneIsok:true
            }) 
        }
    }
    
    handleSubmit = e => {
        e.preventDefault();
        const changePhone = this.text.state.value;
        console.log("reg",changePhone); 
    }

    render() {
        const { getFieldProps } = this.props.form;
        // console.log(this.props.form);
        const {phone, text, password, passwordConfirm } = this.state
        // console.log(phone)
        return (
            <div className="reg">
                {/* 顶部 */}
                <Header />

                <div className="main">
                    <List className="Format" onBlur={this.handleSubmit} renderHeader={() => ' '}>
                        {/* <h4>欢迎登录Mcake</h4> */}

                        <InputItem id="checkPhone" 
                        className="mainInput"{...getFieldProps('phone')} 
                        type="phone"  
                        placeholder={phone}
                        onBlur={this.checkPhone}
                        ref= {el => this.text = el}
                        >
                            <img className="mainInput_phone" src="../img/login/login_phone.png" />
                        </InputItem>

                        <InputItem className="mainInput_text" type="text" placeholder={text}>
                            <img className="mainInput_verify" src="../img/reg/reg_verify.png" />
                        </InputItem>
                        <img className="mainInput_img" src="../img/reg/reg_verifyImg.png "/>


                        <InputItem className="mainInput"
                            
                            type="password"
                            placeholder={password}
                        >
                            <img className="mainInput_lock" src="../img/login/login_lock1.png" />
                        </InputItem>
                        <span className="lock_length">
                            密码长度应为8～20个字符，同时包含大小写字母、数字和特殊字符
                        </span>

                        <InputItem className="mainInput_again"
                            {...getFieldProps('password')}
                            type="password"
                            placeholder={passwordConfirm}
                        >
                            <img className="mainInput_lock" src="../img/login/login_lock1.png" />
                        </InputItem>

                        <div className="reg_agree">
                            <span> <input  className='reg_checkbox' type="checkbox"   /> </span>
                            <span> 同意 </span>
                            <span>《MCAKE购物协议》</span>
                        </div>

                        <div className="goto_login">
                            <NavLink className="goto" to="/login"> 已有账号，立即登录 </NavLink>
                        </div>

                        {/* 注册按钮 */}
                        <div className="regBtn">
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