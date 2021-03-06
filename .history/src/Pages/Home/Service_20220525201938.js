import React from 'react';

const Service = (props) => {
    const {name, img, desc} = props.service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-semibold">{name}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;