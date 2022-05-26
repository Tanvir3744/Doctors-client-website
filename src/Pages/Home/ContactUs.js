import React from 'react';
import Appointment from '../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <section style={{ background: `url(${ Appointment })` }} className='px-16 mt-12 p-12'>
            <div className="text-center ">
                <h4 className='text-secondary text-xl font-bold capitalize'>Contact us</h4>
                <h3 className="text-3xl text-white font-semibold dark capitalize">Stay connected with us</h3>
            </div>
            <div className="contact-form grid grid-cols-1 place-items-center mt-8 ">
                <input type="email" placeholder="Type email here" className="mt-4 input input-bordered input-accent w-full lg:max-w-xs" />
                <input type="text" placeholder="Type subject" className="mt-4 input input-bordered input-accent w-full lg:max-w-xs" />
                <textarea className="mt-4 textarea textarea-accent input-borderd w-full lg:max-w-xs" placeholder="Bio"></textarea>
                <button className=" mt-12 btn btn-primary bg-gradient-to-r from-secondary to-primary text-white ">Submit</button>
            </div>
        </section>
    );
};

export default ContactUs;