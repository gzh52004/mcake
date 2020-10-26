import React from 'react';

import {withAuth, withUser} from '../../utils/hoc'

// ES7的装饰器写法
@withAuth
class Potfoods extends React.Component{
    
    render(){
        return(
            <div>
                Potfoods
            </div>
        )
    }
}
export default Potfoods;