import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

import ReviewRow from './ReviewRow';

const AllUserReviews = () => {
    const services = useLoaderData();
    const { service } = services
    const { user } = useContext(AuthContext);

    const [allReview, setAllReview] = useState([])

    useEffect(() => {
        fetch(`https://sports-photography-server-sojeeb01768.vercel.app/reviews?review=${service}`)
            .then(res => res.json())
            .then(data => setAllReview(data))

    }, [service])
    // console.log(allReview);

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th>Comment</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allReview.map(singleReview => <ReviewRow
                                key={singleReview._id}
                                singleReview={singleReview}
                            ></ReviewRow>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUserReviews;