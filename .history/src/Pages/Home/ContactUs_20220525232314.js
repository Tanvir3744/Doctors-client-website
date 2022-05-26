import React from 'react';

const ContactUs = () => {
    return (
        <section className='px-16 mt-8'>
            <div className="text-center">
                <h4 className='text-secondary text-xl font-bold capitalize'>Contact us</h4>
                <h3 className="text-3xl font-semibold dark capitalize">Stay connected with us</h3>
            </div>
            <div className="contact-form flex flex-col justify-center">
                <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                <textarea class="textarea textarea-accent" placeholder="Bio"></textarea>
            </div>
        </section>
    );
};

export default ContactUs;