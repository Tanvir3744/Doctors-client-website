import React from 'react';
import InfoCards from '../../components/InfoCards';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='flex justify-center'>
                <InfoCards />
                <InfoCards />
                <InfoCards />
            </div>
        </div>
    );
};

export default Home;