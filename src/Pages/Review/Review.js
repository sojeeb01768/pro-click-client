import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Review = () => {
    const { _id, image, service_name, price, details, rating } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleComment = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'Unregistered';
        const review = form.review.value;

        const commentReview = {
            service: _id,
            serviceName: service_name,
            price,
            reviewer: name,
            email,
            phone,
            review
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
                    <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full my-4" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full mb-4" />
                    <input name="phone" type="text" placeholder="Phone" className="input input-bordered w-full mb-4" required />
                    <input name="email" type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full mb-4" readOnly />

                    <textarea name='review' className="textarea textarea-secondary h-24 w-full mb-4" placeholder="Your Review" required></textarea>
                    <input className='btn' type="submit" value="comment" />

                    <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>
                </div>

                


            </div>
        </form>



    );
};

export default Review;