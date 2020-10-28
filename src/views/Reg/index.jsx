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
    constructor() {
        super();
        
    }
    

    render() {
        const { getFieldProps } = this.props.form;

        // 定义账号密码规则
        const rules = {
            username: [
                {required: true,message:'请填写正确的手机号码'},//要求必填
                {
    
                }
            ]
        }
        return (
            <div className="reg">
                {/* 顶部 */}
                <Header />

                <div className="main">
                    <List className="Format" renderHeader={() => ' '}>
                        {/* <h4>欢迎登录Mcake</h4> */}

                        <InputItem className="mainInput"{...getFieldProps('phone')} 
                        type="phone" 
                        placeholder="请输入您的手机号码"
                        
                        >
                            <img className="mainInput_phone" src="../img/login/login_phone.png" />
                        </InputItem>

                        <InputItem className="mainInput_text" type="text" placeholder="图片验证码">
                            <img className="mainInput_verify" src="../img/reg/reg_verify.png" />
                        </InputItem>
                        <img className="mainInput_img" src="../img/reg/reg_verifyImg.png "/>


                        <InputItem className="mainInput"
                            
                            type="password"
                            placeholder="请设置您的密码"
                        >
                            <img className="mainInput_lock" src="../img/login/login_lock1.png" />
                        </InputItem>
                        <span className="lock_length">
                            密码长度应为8～20个字符，同时包含大小写字母、数字和特殊字符
                        </span>

                        <InputItem className="mainInput_again"
                            {...getFieldProps('password')}
                            type="password"
                            placeholder="请再次确认密码"
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