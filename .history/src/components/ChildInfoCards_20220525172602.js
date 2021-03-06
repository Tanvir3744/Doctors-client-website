import React from 'react';

const ChildInfoCards = (props) => {
    const {img} = props;
    return (
        <div className='container'>
            <div class="card lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary">
                <figure><img src={img} alt="Info cards" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default ChildInfoCards;