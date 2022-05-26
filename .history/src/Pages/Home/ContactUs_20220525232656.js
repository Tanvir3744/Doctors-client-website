import React from 'react';

const ContactUs = () => {
    return (
        <section className='px-16 mt-8'>
            <div className="text-center">
                <h4 className='text-secondary text-xl font-bold capitalize'>Contact us</h4>
                <h3 className="text-3xl font-semibold dark capitalize">Stay connected with us</h3>
            </div>
            <div className="contact-form grid grid-cols-1">
                <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full lg:max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full lg:max-w-xs" />
                <textarea className="textarea textarea-accent input-borderd w-full lg:max-w-xs" placeholder="Bio"></textarea>
            </div>
        </section>
    );
};

export default ContactUs;