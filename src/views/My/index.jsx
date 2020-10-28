import React from 'react';

import {withAuth, withUser} from '../../utils/hoc'

// ES7的装饰器写法
@withAuth
class My extends React.Component{
    
    render(){
        return(
            <div>
                My
            </div>
        )
    }
}
export default My;