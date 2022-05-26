import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selected={selected} onSelected={setSelected} />
            <AvailableAppointment />
        </div>
    );
};

export default Appointment;