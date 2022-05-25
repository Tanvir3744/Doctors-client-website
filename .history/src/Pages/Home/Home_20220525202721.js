import React from 'react';
import InfoCards from '../../components/InfoCards';
import Banner from './Banner/Banner';
import ServiceHero from './ServiceHero';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCards />
            <Services />
            <ServiceHero/>
        </div>
    );
};

export default Home;