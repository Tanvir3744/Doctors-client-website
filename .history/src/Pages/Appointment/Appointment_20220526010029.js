import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selected={selected} onSelected={setSelected}/>
        </div>
    );
};

export default Appointment;