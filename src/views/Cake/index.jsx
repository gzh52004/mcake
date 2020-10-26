import React from 'react';

import {withAuth, withUser} from '../../utils/hoc'

// ES7的装饰器写法
@withAuth
class Cake extends React.Component{
    
    render(){
        return(
            <div>
                Cake
            </div>
        )
    }
}
export default Cake;