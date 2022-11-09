import React from 'react';

const ReviewCard = () => {
    console.log(review);
    const { serviceName, reviewer, email, review } = review;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default ReviewCard;