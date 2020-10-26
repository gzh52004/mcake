import React from 'react'
// import { withAuth } from '../../utils/hoc';

import './style.scss'

let HomeHead = function (props) {
    // console.log('Home.props',props)

    return (
        <div className="header">
            <div className="beijing">
                <span className="text">北京市</span>
            </div>
            <div className="picture">
                <img src="./img/cake.png" alt=""/>
            </div>
            <div className="search">
                {/* <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg> */}
            </div>
            <div className="mine"></div>
        </div >
    )
}
export default HomeHead