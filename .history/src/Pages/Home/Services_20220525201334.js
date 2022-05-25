import React from 'react';
import Fluoride from '../../assets/images/fluoride.png';
import Cavity from '../../assets/images/cavity.png';
import Whitening from '../../assets/images/whitening.png';
const Services = () => {
    const serviceData = [
        {
            _id: 1,
            img: Fluoride,
            name: 'Fluoride Treatment',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            _id: 2,
            img: Cavity,
            name: 'Cavity Filling',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 3,
            img: Whitening,
            name: 'Teeth Whitening',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }

    ]
    return (
        <div>
            <div className=' text-center mt-20'>
                <h3 className='text-primary uppercase font-bold text-2xl'>Our Services</h3>
                <h2 className='text-4xl text-dark capitalize font-semibold'>Services we provide</h2>
            </div>
        </div>
    );
};

export default Services;