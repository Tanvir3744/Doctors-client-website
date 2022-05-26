import React from 'react';
import InfoCards from '../../components/InfoCards';
import Banner from './Banner/Banner';
import MakeAppointment from './MakeAppointment';
import ServiceHero from './ServiceHero';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCards />
            <Services />
            <ServiceHero />
            <MakeAppointment />
            <Testimonials />
            <ContactUs />
        </div>
    );
};

export default Home;