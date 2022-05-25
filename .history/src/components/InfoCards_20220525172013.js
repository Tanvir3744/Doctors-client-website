import React from 'react';
import ChildInfoCards from './ChildInfoCards';
import Clock from './../assets/icons/clock.svg'

const InfoCards = () => {
    return (
        <div>
            <ChildInfoCards img={Clock} />
        </div>
    );
};

export default InfoCards;