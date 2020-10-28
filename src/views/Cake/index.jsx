import React from 'react';

import { withAuth, withUser } from '../../utils/hoc'
import request from '../../utils/request'
import CakeMain from '../../components/Main/CakeMain'
import HomeHead from '../../components/Head/HomeHead'
import HomeTarbar from '@/components/Tarbar/HomeTarbar'


// @withUser
class Cake extends React.Component {
    
    render() {
        // console.log("Cake.Props",this.props);
        return (
            <div>
                <HomeHead {...this.props}/>
                <CakeMain {...this.props}/>
                <HomeTarbar />
            </div>
        )
    }
}
export default Cake;