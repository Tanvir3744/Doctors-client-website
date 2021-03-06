import React from 'react';

const InfoCards = () => {
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Info cards" /></figure>
            <div class="card-body">
                <h2 class="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default InfoCards;