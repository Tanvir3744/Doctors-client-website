import React from 'react';
import Chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({selected, setSelected}) => {
    
    return (
        <div>
            <div class="hero min-h-screen flex justify-evenly">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={Chair} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='shadow rounded'>
                        <DayPicker mode='single' selected={selected} onSelect={setSelected} />
                        <h2>You have selected : { format(selected, "PP")}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;