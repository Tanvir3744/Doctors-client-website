import React from 'react';
import InfoCards from '../../components/InfoCards';
import Banner from './Banner/Banner';
import MakeAppointment from './MakeAppointment';
import ServiceHero from './ServiceHero';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCards />
            <Services />
            <ServiceHero />
            <MakeAppointment />
        </div>
    );
};

export default Home;