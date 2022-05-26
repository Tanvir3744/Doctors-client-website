import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner/>
        </div>
    );
};

export default Appointment;