import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ selected }) => {
    return (
        <div>
            <div className='text-date text-center'>
                <h4 className='text-xl text-primary '>Available Services on {format(selected, "PP")} </h4>
                <h3 className="text-xl text-dark">Please select a service.</h3>
            </div>
        </div>
    );
};

export default AvailableAppointment;