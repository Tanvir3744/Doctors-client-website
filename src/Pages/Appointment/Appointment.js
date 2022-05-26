import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selected={selected} onSelected={setSelected} />
            <AvailableAppointment selected={selected} onSelected={setSelected} />
        </div>
    );
};

export default Appointment;