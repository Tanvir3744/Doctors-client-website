import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ selected }) => {
    return (
        <div>
            <div className='text-date'>
                <h4>Available Services on {format(selected, "PP")}</h4>
            </div>
        </div>
    );
};

export default AvailableAppointment;