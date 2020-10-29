import React from 'react';

import Carousal from '../../Carousal/index'


class HomeMain extends React.Component {

    render() {
        console.log("topCarousal",document.getElementById('topCarousal'));
        return (
            <div className="homemain">
                
                <Carousal />
                {/* <div id="topCarousal"></div> */}

                {/* <App /> */}

            </div>
        )
    }
    
}


export default HomeMain