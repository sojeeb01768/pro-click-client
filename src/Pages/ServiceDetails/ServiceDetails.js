import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const { _id, service_name, price, details, image, rating } = useLoaderData();


    return (
        <div className="card w-100 bg-base-100 shadow-xl">
            <figure><img className='rounded-xl' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-4xl font-semibold">{service_name}</h2>
                <p><span className='font-semibold text-blue-700'>Price:</span> {price}$</p>
                <p><span className='font-semibold text-blue-700'>Rating:</span> {rating}</p>
                <p><span className='font-semibold text-blue-700'>Details:</span> {details}</p>
                <div className="card-actions justify-end">
                    <Link to={`/review/${_id}`}><button className="btn btn-primary">Review</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;