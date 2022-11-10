import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { image, price, service_name, _id, rating, details } = service;
    return (
        <div className="card w-100 m-10 bg-base-100 shadow-xl">

            <div>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img className='w-full rounded-xl' src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>

                {/* <figure><img ='w-5/6 rounded-xl' src={image} alt="" /></figure> */}
                <div className="card-body">
                    <h2 className="text-4xl font-semibold">{service_name}</h2>
                    <p className='font-semibold'>Price: ${price}</p>
                    <p className=''>Rating: {rating}</p>
                    <div>
                        {

                            details.length > 100 ?
                                <p>{details.slice(0, 100) + '...'} <Link className='text-blue-600 font-semibold' to={`/servicedetails/${_id}`}>See Details</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </div>

                </div>
            </div>

            

        </div>
    );
};

export default ServiceCard;