import React from 'react';

import {withAuth, withUser} from '../../utils/hoc'

@withUser
class Details extends React.Component{
    
    render(){
        console.log("Details的地址来源",this.props.location.pathname.split("/")[2]);
        return(
            <div>
                Details
            </div>
        )
    }
}
export default Details;