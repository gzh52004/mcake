import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';


import Cake from '@/views/Cake'
import Cart from '@/views/Cart'
import Home from '@/views/Home'
import Potfoods from '@/views/Potfoods'
import { Accordion, List } from 'antd-mobile';
import './style.scss'

class HomeTarbar extends React.Component {
    state = {
        menu: [{
                text: '首页',
                path: '/home',
                name: 'home',
                component: Home,
            },
            {
                text: '蛋糕',
                path: '/cake',
                name: 'cake',
                component: Cake
            },
            {
                text: '小食',
                path: '/potfoods',
                name: 'potfoods',
                component: Potfoods,
            }, {
                text: '购物车',
                path: '/cart',
                name: 'cart',
                component: Cart,
            }],
    }
    // 点击精选之后弹出来的左侧的菜单选项
    check() {
        this.props.history.push('/cake')
        this.choiceness.className = 'choiceness'
        this.mask.className = "mask"
    }
    render() {
        const { menu } = this.state;
        console.log("Tarbar.this",this);
        return (
            <div>
                {/* 点击精选弹出来的左侧按钮 */}
                <div className='display_none' ref={el => this.choiceness=el}>
                    <div className="choice_content">
                        <div className="first_order" onClick={this.check.bind(this)}>
                            <span>所有蛋糕</span>
                            <span className="weibiao">32</span>
                        </div>
                        <Accordion
                            className="my-accordion">
                            <Accordion.Panel header="口味筛选">
                                <List className="my-list">
                                    <List.Item onClick={this.check.bind(this)}>
                                        <span className="iconfont icon-sousuo"></span>
                                        <span className="text">拿破仑</span>
                                    </List.Item>
                                    <List.Item onClick={this.check.bind(this)}>奶油</List.Item>
                                    <List.Item onClick={this.check.bind(this)}>慕斯</List.Item>
                                    <List.Item onClick={this.check.bind(this)}>芝士</List.Item>
                                    <List.Item onClick={this.check.bind(this)}>巧克力</List.Item>
                                    <List.Item onClick={this.check.bind(this)}>咖啡</List.Item>
                                    <List.Item onClick={this.check.bind(this)}>坚果</List.Item>
                                    <List.Item onClick={this.check.bind(this)}>水果</List.Item>
                                </List>
                            </Accordion.Panel>
                            <Accordion.Panel header="场景筛选">
                                <List className="my-list">
                                    <List.Item onClick={this.check.bind(this)}>生日</List.Item>
                                    <List.Item onClick={this.check.bind(this)}>聚会</List.Item>
                                    <List.Item onClick={this.check.bind(this)}>情侣</List.Item>
                                    <List.Item onClick={this.check.bind(this)}>儿童</List.Item>
                                    <List.Item onClick={this.check.bind(this)}>长辈</List.Item>
                                    <List.Item onClick={this.check.bind(this)}>下午茶</List.Item>
                                </List>
                            </Accordion.Panel>
                        </Accordion>
                        <div className="first_order" onClick={this.check.bind(this)}>
                            <span>所有小食</span>
                            <span className="weibiao">11</span>
                        </div>
                        <div className="first_order" onClick={this.check.bind(this)}>
                            <span>所有配件</span>
                            <span className="weibiao">4</span>
                        </div>
                    </div>
                </div>
                {/* 点击精选的遮罩层 */}
                <div className="display_none"
                 ref={el => this.mask=el}
                 onClick={()=>{
                     console.log(this.choiceness)
                    this.choiceness.className='display_none'
                    this.mask.className="display_none"
                }}
                 ></div>                
                {/* 底部的导航栏 */}
                <nav>
                    <ul className="tarbar">
                        <li key="choiceness" onClick={() => {
                            this.choiceness.className = 'choiceness'
                            this.mask.className = "mask" }}>
                                精选
                        </li>
                        {
                            menu.map(item => <li key={item.name}> <NavLink activeClassName="active" to={item.path}>{item.text}</NavLink></li>)
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}
export default HomeTarbar