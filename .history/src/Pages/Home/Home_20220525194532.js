import React from 'react';
import InfoCards from '../../components/InfoCards';
import Banner from './Banner/Banner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCards />
            <Services />
        </div>
    );
};

export default Home;