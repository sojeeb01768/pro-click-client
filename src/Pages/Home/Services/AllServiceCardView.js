import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllServiceCardView = ({ single }) => {

    const { image, price, service_name, _id, rating } = single;
    return (
        <div className="card w-100 m-10 bg-base-100 shadow-xl">


            <PhotoProvider>
                <PhotoView src={image}>
                    <img className='w-full rounded-xl' src={image} alt="" />
                </PhotoView>
            </PhotoProvider>
            {/* <figure><img className='w-5/6 rounded-xl' src={image} alt="" /></figure> */}
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                {/* <p>{details}</p> */}
                <p className='font-semibold'>Price: ${price}</p>
                <p className=''>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/review/${_id}`}>
                        <button className="btn btn-primary">Review</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllServiceCardView;