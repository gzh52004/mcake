import React from 'react';

import {withAuth, withUser} from '../../utils/hoc'

// ES7的装饰器写法
@withAuth
class Reg extends React.Component{
    
    render(){
        return(
            <div>
                Reg
            </div>
        )
    }
}
export default Reg;