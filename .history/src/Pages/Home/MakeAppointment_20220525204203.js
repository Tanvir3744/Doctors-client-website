import React from 'react';
import Appointment from "../../assets/images/appointment.png";
import Doctor from '../../assets/images/doctor.png';
const MakeAppointment = () => {
    return (
        <div className='flex justify-center align-center'>
            <div className='flex-1'>
                <img src={Doctor} alt="Doctors image" />
            </div>
            <div className='flex-1'>
                <h6>Appointment</h6>
                <h5>Make an appointment Today</h5>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </div>
    );
};

export default MakeAppointment;