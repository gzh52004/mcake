import React from 'react';

import {withAuth, withUser} from '../../utils/hoc'

// ES7的装饰器写法
@withAuth
class Choiceness extends React.Component{
    
    render(){
        return(
            <div>
                Choiceness
            </div>
        )
    }
}
export default Choiceness;