import React from 'react';
import ChildInfoCards from './ChildInfoCards';
import Clock from './../assets/icons/clock.svg'
import Marker from './../assets/icons/marker.svg'
import Phone from './../assets/icons/phone.svg'
const InfoCards = () => {

    return (
        <div className='grid px-6 grid-cols-1 lg:grid-cols-3 gap-4'>
            <ChildInfoCards bgClass='bg-primary' cardTitle='Opening Hours' img={Clock} />
            <ChildInfoCards bgClass='bg-accent' cardTitle='Our Location' img={Marker} />
            <ChildInfoCards bgClass='' cardTitle='Contact Us' img={Phone} />
        </div>
    );
};

export default InfoCards;