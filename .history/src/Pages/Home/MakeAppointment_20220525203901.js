import React from 'react';
import Appointment from "../../assets/images/appointment.png";
import Doctor from '../../assets/images/doctor.png';
const MakeAppointment = () => {
    return (
        <div>
            <div>
                <img src={Doctor} alt="Doctors image" />
            </div>
            <div>
                <h1>this is description</h1>
            </div>
        </div>
    );
};

export default MakeAppointment;