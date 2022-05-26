import React from 'react';
import Appointment from "../../assets/images/appointment.png";
import Doctor from '../../assets/images/doctor.png';
const MakeAppointment = () => {
    return (
        <div style={{background:`url(${Appointment})`}} className='flex justify-center items-center mt-16'>
            <div className='flex-1 -mt-36 hidden sm:block'>
                <img src={Doctor} alt="Doctors image" />
            </div>
            <div className='flex-1 pr-16'>
                <h6 className='my-4 text-secondary text-xl font-bold'>Appointment</h6>
                <h5 className='my-4 text-white text-4xl font-semibold'>Make an appointment Today</h5>
                <p className='my-4 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary bg-gradient-to-r from-secondary text-white font-semibold to-primary">Get Started</button>
            </div>
        </div>
    );
};

export default MakeAppointment;