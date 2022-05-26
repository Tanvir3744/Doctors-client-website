import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selected, setSelected}) => {
    return (
        <div>
            this is available appointment {format(selected, "PP")}
        </div>
    );
};

export default AvailableAppointment;