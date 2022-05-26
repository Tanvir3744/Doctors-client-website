import React from 'react';
import Quote from '../../assets/icons/quote.svg'

const Testimonials = () => {
    return (
        <div className='mt-12 px-16 flex justify-between'>
            <div>
                <h3 className='text-xl text-secondary font-bold'>Testimonial</h3>
                <h2 className='text-2xl font-semibold'>What Our Patients Says</h2>
            </div>
            <div className='w-44'>
                <img src={Quote} alt="" />
            </div>
        </div>
    );
};

export default Testimonials;