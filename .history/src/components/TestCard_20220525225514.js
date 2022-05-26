import React from 'react';

const TestCard = (props) => {
    const { name, img, review, address } = props.test;
    return (
        <div>
            <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                    <p>{review}</p>
                    <div class="avatar flex items-center">
                        <div class="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                        <div>
                            <h5 className='text-lg font-semibold text-dark'>{name}</h5>
                            <h6>{address}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestCard;