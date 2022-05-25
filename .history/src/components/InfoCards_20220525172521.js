import React from 'react';
import ChildInfoCards from './ChildInfoCards';
import Clock from './../assets/icons/clock.svg'
import Marker from './../assets/icons/marker.svg'
import Phone from './../assets/icons/phone.svg'
const InfoCards = () => {
    return (
        <div>
            <ChildInfoCards img={Clock} />
            <ChildInfoCards img={Clock} />
            <ChildInfoCards img={Clock} />
        </div>
    );
};

export default InfoCards;