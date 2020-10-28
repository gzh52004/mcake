import React from 'react';

import {withAuth, withUser} from '../../utils/hoc'
import HomeHead from '@/components/Head/HomeHead'
import HomeTarbar from '@/components/Tarbar/HomeTarbar'


// ES7的装饰器写法
// @withUser
class Home extends React.Component{
    
    render(){
        return(
            <div>
                <HomeHead {...this.props} />
                <HomeTarbar />
            </div>
        )
    }
}
export default Home;