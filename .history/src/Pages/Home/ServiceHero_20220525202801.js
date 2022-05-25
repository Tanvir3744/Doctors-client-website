import React from 'react';
import Treatment from '../../assets/images/treatment.png'

const ServiceHero = () => {
    return (
        <div>
            <div class="hero min-h-screen px-16">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={Treatment} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-16'>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;