import React from 'react'
import request from '../../../utils/request'
import './style.scss'

// 节流函数，每delay时间才执行一次
let delay = (function() {
    let timer = 0;
    return function(callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

class PotfoodsMain extends React.Component {
    state = {
        datalist: [],//渲染当前商品的数据列表
        initialIndex: 1,//数据最开始
    }

    // 判断页面是否滑到底部
    onScrollHandle(event) {
        const clientHeight = event.target.clientHeight
        const scrollHeight = event.target.scrollHeight
        const scrollTop = event.target.scrollTop
        const isBottom = (clientHeight + scrollTop + 1 >= scrollHeight)
        // 如果到达底部，就请求多6条数据回来
        if(isBottom){
            // 使用节流函数防止多次触发事件
            delay(() => {
                this.requestdata()
            }, 300);
        }
    }

    // 请求数据的函数，为datalist中新增六条数据
    async requestdata(){
        const{data: newdatalist} = await request.get('good/allsnacks', {
            params: {
                page: this.state.initialIndex,
                maxcount: 6
            }
        })
        console.log("PotfoodsMain.newdatalist",newdatalist.data);
        let arr=this.state.datalist;
        arr.push.apply(arr,newdatalist.data)
        console.log("PotfoodsMain.arr",arr);
        this.setState({
            datalist: arr,
            initialIndex: this.state.initialIndex + 1
        })
    }

    async componentDidMount() {
        // 调用请求数据的函数，初始增加六条数据
        this.requestdata()
        // 第一次渲染后，更新state后，判断是否存在contentNode元素，如果存在就开启监听
        if (this.contentNode) {
            this.contentNode.addEventListener('scroll', this.onScrollHandle.bind(this));
        }
        
    }
    componentWillUnmount() {
        // 页面销毁就取消这个监听
        if (this.contentNode) {
          this.contentNode.removeEventListener('scroll', this.onScrollHandle.bind(this));
        }
    }
    render(){
        let { datalist } = this.state;
        return (
            <div className="potmain" ref={el => this.contentNode = el}>
                {
                    datalist.map((item) => {
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
        )
    }
}
export default PotfoodsMain