import React from 'react'
import { withUser,withAuth } from '../../../utils/hoc';

import './style.scss'
// console.log("withUser",withUser);
// @withUser
let HomeHead = function (props) {
    console.log('Home.props',props)

    return (
        <div className="header">
            <div className="beijing">
                <span className="iconfont icon-location"></span>
                <span className="text">北京市</span>
            </div>
            <div className="picture">
                <img src="./img/cake.png" alt="" onClick={()=>{props.history.push('/home')}}/>
            </div>
            <div className="search">
                <span className="iconfont icon-sousuo"></span>
            </div>
            <span className="shuxian">|</span>
            <div className="mine" onClick={()=>{props.history.push('/my')}}>
                <span className="iconfont icon-my"></span>
            </div>
        </div >
    )
}
export default HomeHead