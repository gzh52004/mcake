import React from 'react';

import {withAuth, withUser} from '../../utils/hoc'

// ES7的装饰器写法
@withAuth
class Cart extends React.Component{
    
    render(){
        return(
            <div>
                Cart
            </div>
        )
    }
}
export default Cart;