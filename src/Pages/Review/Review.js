import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AllUserReviews from '../AllUserReviews/AllUserReviews';

const Review = () => {
    const { _id, image, service_name, price, details, rating } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleComment = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;

        const commentReview = {
            service: _id,
            serviceName: service_name,
            userName: user.displayName,
            price,
            email: user.email,
            image: user.photoURL,
            review: review
        }


        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(commentReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review Posted ')
                    form.reset();
                }
            })
            .catch(err => console.error(err));

    }


    return (

        <form onSubmit={handleComment}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-5'>
                <div className='m-5'>

                    <h2 className='text-4xl text-center font-semibold'>{service_name}</h2>
                    <img className='my-5 rounded-lg' src={image} alt="" />

                    <p><span className='font-semibold text-blue-700'>Rating:</span> {rating}</p>
                    <p><span className='font-semibold text-blue-700'>Price:</span> {price}$</p>
                    <p><span className='font-semibold text-blue-700'>Details:</span> {details}</p>
                </div>
                <div className='my-4'>
                    <textarea name='review' className="textarea textarea-secondary h-24 w-full mb-4" placeholder="Your Review" required></textarea>
                    <input className='btn btn-outline btn-success mb-5' type="submit" value="comment" />



                    <div>
                        <AllUserReviews></AllUserReviews>
                    </div>
                </div>




            </div>
        </form>



    );
};

export default Review;