import React from 'react';

import {withAuth, withUser} from '../../utils/hoc'
import HomeHead from '@/components/Head/HomeHead'

// ES7的装饰器写法
// @withAuth
class Home extends React.Component{
    
    render(){
        return(
            <div>
                <HomeHead />
            </div>
        )
    }
}
export default Home;