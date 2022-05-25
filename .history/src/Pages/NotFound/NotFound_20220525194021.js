import React from 'react';
import Disconnected from '../../assets/images/dribbble_1.gif';
const NotFound = () => {
    return (
        <div className='grid place-content-center'>
            <img src={Disconnected} alt="" />
            <h1>Page not Found</h1>
        </div>
    );
};

export default NotFound;