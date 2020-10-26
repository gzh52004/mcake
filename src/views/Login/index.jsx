import React from 'react';

import {withAuth, withUser} from '../../utils/hoc'

// ES7的装饰器写法
@withAuth
class Login extends React.Component{
    
    render(){
        return(
            <div>
                Login
            </div>
        )
    }
}
export default Login;