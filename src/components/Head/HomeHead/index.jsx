import React from 'react'
// import { withAuth } from '../../utils/hoc';

import './style.scss'

let HomeHead = function (props) {
    // console.log('Home.props',props)

    return (
        <div className="header">
            <div className="beijing">
                <span className="iconfont icon-location"></span>
                <span className="text">北京市</span>
            </div>
            <div className="picture">
                <img src="./img/cake.png" alt=""/>
            </div>
            <div className="search">
                <span className="iconfont icon-sousuo"></span>
            </div>
            <span className="shuxian">|</span>
            <div className="mine">
                <span className="iconfont icon-toggle"></span>
            </div>
        </div >
    )
}
export default HomeHead