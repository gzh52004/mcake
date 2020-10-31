import React from 'react';

import HomeHead from '@/components/Head/HomeHead'
import HomeMain from '@/components/Main/HomeMain'
import HomeTarbar from '@/components/Tarbar/HomeTarbar'


// ES7的装饰器写法
// @withUser
class Home extends React.Component{
    
    render(){
        return(
            <div>
                <HomeHead {...this.props} />
                <HomeMain />
                <HomeTarbar {...this.props}  />
            </div>
        )
    }
}
export default Home;