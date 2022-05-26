import React from 'react';
import Quote from '../../assets/icons/quote.svg';
import People1 from '../../assets/images/people1.png';
import People2 from '../../assets/images/people2.png';
import People3 from '../../assets/images/people3.png'
import TestCard from '../../components/TestCard';

const Testimonials = () => {
    const testData = [
        {
            _id: 5,
            name: 'Tanvir Ahmed',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: People1,
            address:'Brooklyn'
        },
        {
            _id: 6,
            name: 'Hossain Sajjad',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: People2,
            address:'las vegas'
        },
        {
            _id: 7,
            name: 'Nazmul Abedin',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: People3,
            address:'New York City'
        }

    ]
    return (
        <section>
            <div className='mt-12 px-16 flex justify-between'>
                <div>
                    <h3 className='text-xl text-secondary font-bold'>Testimonial</h3>
                    <h2 className='text-2xl font-semibold'>What Our Patients Says</h2>
                </div>
                <div className='w-28 lg:w-48'>
                    <img src={Quote} alt="" />
                </div>
            </div>

            {/* testimonial cards */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-16 mt-8 lg:max-w-lg gap-8'>
                {
                    testData.map(test => <TestCard key={test._id} test={test}></TestCard>)
                }
            </div>
        </section>
    );
};

export default Testimonials;