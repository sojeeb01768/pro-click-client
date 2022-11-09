import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Review = () => {
    const { _id, service_name, price } = useLoaderData();
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


        fetch('https://sports-photography-server.vercel.app/reviews', {
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
            <h2 className='text-4xl text-center'>{service_name}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-5'>
                <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full" />
                <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full" />
                <input name="phone" type="text" placeholder="Phone" className="input input-bordered w-full" required />
                <input name="email" type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />

            </div>
            <textarea name='review' className="textarea textarea-secondary h-24 w-full" placeholder="Your Review" required></textarea>
            <input className='btn ' type="submit" value="comment" />
        </form>
    );
};

export default Review;