import React from 'react';
// import Data from './data.json';

import ImageSlider from "./ImageSlider";
import { SliderData } from '../Data/SliderData';

export const  Home=()=>{
    return (
        
        <><div className="main-section">
            <ImageSlider slides={SliderData} />
            <div className="content-box">
                <h1>Make yourself stronger than your excuses</h1>
                <p>
                    Flow Fitness was borne out of frustration over ﬁtness options.<br></br>
                    People had to choose between a cheap, sweaty gym environment or expensive fitness boutique that does only one thing.  Some are simply forced to get memberships at multiple places to meet their needs. We decided there has to be a better solution.
                </p>
            </div>
        </div>
        <div className='footer'>
        <p><small>&copy; 2021 Pexels GmbH</small></p>
        </div>
        </>
    );
}