import React from 'react';
import HomeHead from '../../components/Head/HomeHead';
import PotfoodsMain from '../../components/Main/PotfoodsMain'
import HomeTarbar from '@/components/Tarbar/HomeTarbar'
import {withAuth, withUser} from '../../utils/hoc'


// @withAuth
class Potfoods extends React.Component{
    
    render(){
        console.log("Potfoods.props",this.props);
        return(
            <div>
                <HomeHead {...this.props}/>
                <PotfoodsMain {...this.props}/>
                <HomeTarbar {...this.props}  />
            </div>
        )
    }
}
export default Potfoods;