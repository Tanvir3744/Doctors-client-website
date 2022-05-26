import React from 'react';
import Chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Appointment = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={Chair} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                       <DayPicker />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;