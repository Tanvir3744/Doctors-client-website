import React from 'react';

const ChildInfoCards = (props) => {
    const {img, cardTitle} = props;
    return (
        <div className='container'>
            <div className="card lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary p-4 pl-4">
                <figure><img src={img} alt="Info cards" /></figure>
                <div class="card-body text-white">
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default ChildInfoCards;