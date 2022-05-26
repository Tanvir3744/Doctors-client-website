import React from 'react';

const TestCard = () => {
    return (
        <div>
            <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestCard;