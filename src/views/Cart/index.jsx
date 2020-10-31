import React from 'react';

import {withAuth, withUser} from '../../utils/hoc'

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