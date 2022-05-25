import React from 'react';
import Fluoride from '../../assets/images/fluoride.png';
import Cavity from '../../assets/images/cavity.png';
import Whitening from '../../assets/images/whitening.png';
import Service from './Service';
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
            <div className="service-cards  className='grid grid-cols-1 lg:grid-cols-3 '">
                {
                    serviceData.map(serve => <Service key={serve._id} service = {serve}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;