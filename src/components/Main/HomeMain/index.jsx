import React from 'react';
import request from '../../../utils/request'
import Carousal from '../../Carousal/index'

import './style.scss'

class HomeMain extends React.Component {
    state = {
        seasonal: [],
        popularity: [],
        lovely: [],
        title: [],
    }
    async requestion(path, currentPage) {
        let data = await request.get(path, {
            params: {
                page: currentPage,
                maxcount: 4
            }
        })
        return data

    }
    async UNSAFE_componentWillMount() {
        var req = await request.get('good/getcommand')
        this.setState({ title: req.data.data })

        var data1 = await this.requestion('good/allsnacks', 1)
        this.setState({
            seasonal: data1.data.data
        })


        var data2 = await this.requestion('good/allsnacks', 2)
        this.setState({
            popularity: data2.data.data
        })


        var data3 = await this.requestion('good/allsnacks', 3)
        this.setState({
            lovely: data3.data.data
        })
    }
    render() {
        let titlePic = this.state.title;
        let seasonal = this.state.seasonal
        let popularity = this.state.popularity
        let lovely = this.state.lovely
        return (
            <div className="homemain">
                <Carousal />
                <div className="home">
                    <div className="home_item">
                        <img src="./img/home/icon_cj.png" alt="" />
                        <div className="center">
                            <p className="top"><span>本季</span>推荐</p>
                            <p className="bottom">Seasonal Recommend</p>
                        </div>
                        <span className="right">Seasonal</span>
                    </div>
                    <div className="home_item_title">
                        {
                            titlePic && titlePic[0] ?
                                <img src={titlePic[0].url} alt="" className="pic" /> :
                                <img src="" alt="" />
                        }
                    </div>
                </div>
                <div className="hommain">
                    {
                        seasonal.map((item) => {
                            return (
                                // 每一个item，一件商品
                                <div className="content" key={item._id}>
                                    <div className="proImg">
                                        {/* 跳转到详情页并且将_id传过去 */}
                                        <a href={"#/details/" + item._id}>
                                            <img src={item.url} alt="" className="pic1" />
                                        </a>
                                    </div>
                                    <div className="proContent">
                                        <div className="chidescribe">
                                            <p className="protitle">
                                                <span className="title">{item.title}</span>
                                                <span className="clas">{item.tag}</span>
                                            </p>
                                            <p className="describe">{item.englishTitle}</p>
                                        </div>
                                        <p className="price">{item.price}</p>
                                        <div className="cart">
                                            <span className="iconfont icon-che"></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="home">
                    <div className="home_item">
                        <img src="./img/home/icon_cj.png" alt="" />
                        <div className="center">
                            <p className="top"><span>人气</span>推荐</p>
                            <p className="bottom">Popularity Recommend</p>
                        </div>
                        <span className="right">Popularity</span>
                    </div>
                    <div className="home_item_title">
                        {
                            titlePic && titlePic[1] ?
                                <img src={titlePic[1].url} alt="" className="pic" /> :
                                <img src="" alt="" />
                        }
                    </div>
                </div>
                <div className="hommain">
                    {
                        popularity.map((item) => {
                            return (
                                // 每一个item，一件商品
                                <div className="content" key={item._id}>
                                    <div className="proImg">
                                        {/* 跳转到详情页并且将_id传过去 */}
                                        <a href={"#/details/" + item._id}>
                                            <img src={item.url} alt="" className="pic1" />
                                        </a>
                                    </div>
                                    <div className="proContent">
                                        <div className="chidescribe">
                                            <p className="protitle">
                                                <span className="title">{item.title}</span>
                                                <span className="clas">{item.tag}</span>
                                            </p>
                                            <p className="describe">{item.englishTitle}</p>
                                        </div>
                                        <p className="price">{item.price}</p>
                                        <div className="cart">
                                            <span className="iconfont icon-che"></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="home">
                    <div className="home_item">
                        <img src="./img/home/icon_cj.png" alt="" />
                        <div className="center">
                            <p className="top"><span>萌系</span>推荐</p>
                            <p className="bottom">Lovely Recommend</p>
                        </div>
                        <span className="right">Lovely</span>
                    </div>
                    <div className="home_item_title">
                        {
                            titlePic && titlePic[2] ?
                                <img src={titlePic[2].url} alt="" className="pic" /> :
                                <img src="" alt="" />
                        }
                    </div>
                </div>
                <div className="hommain">
                    {
                        lovely.map((item) => {
                            return (
                                // 每一个item，一件商品
                                <div className="content" key={item._id}>
                                    <div className="proImg">
                                        {/* 跳转到详情页并且将_id传过去 */}
                                        <a href={"#/details/" + item._id}>
                                            <img src={item.url} alt="" className="pic1" />
                                        </a>
                                    </div>
                                    <div className="proContent">
                                        <div className="chidescribe">
                                            <p className="protitle">
                                                <span className="title">{item.title}</span>
                                                <span className="clas">{item.tag}</span>
                                            </p>
                                            <p className="describe">{item.englishTitle}</p>
                                        </div>
                                        <p className="price">{item.price}</p>
                                        <div className="cart">
                                            <span className="iconfont icon-che"></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="bank">
                    <p>银行专区Bank Aone</p>
                </div>
                <div className="active_area">
                    <img src="./img/home/active_area.jpg" alt=""/>
                </div>
            </div>
        )
    }

}


export default HomeMain