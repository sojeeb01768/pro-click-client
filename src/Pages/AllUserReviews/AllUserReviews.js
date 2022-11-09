import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const AllUserReviews = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);
    const [allReview, setAllReview] = useState({})



    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setAllReview(data))

    }, [user?.email])

    return (
        <div>
            <h2>All review: {allReview.length}</h2>
            {/* {
                    allReview.map(review=> <ReviewCard
                    key={review._id}
                    review={review}
                    ></ReviewCard>)
                }
     */}
        </div>
    );
};

export default AllUserReviews;