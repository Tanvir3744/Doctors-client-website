import React from 'react';

const TestCard = (props) => {
    const { name, img, review, address } = props.test;
    return (
        <div>
            <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                    <p>{review}</p>
                    <div class="flex items-center justify-start mt-4 ">
                        <div class="w-24 rounded-full  ring-offset-base-100 ring-offset-2">
                            <img className='ring ring-secondary rounded-full' src={img} />
                        </div>
                        <div className='ml-4 flex flex-col self-center'>
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