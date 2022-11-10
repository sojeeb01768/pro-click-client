import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {

    const { user } = useContext(AuthContext);

    const [myReview, setMyReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data))

    }, [user?.email])



    return (
        <div className="overflow-x-auto w-full">
            <h1 className='text-3xl text-center my-5 font-semibold text-orange-600'>My Review</h1>
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Name</th>
                        <th>Comment</th>
                        {/* <th>Favorite Color</th> */}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myReview.map(singleReview => <MyReviewRow
                            key={singleReview._id}
                            singleReview={singleReview}
                        ></MyReviewRow>)
                    }
                </tbody>



            </table>
        </div>
    );
};

export default MyReview;