import React, { useEffect, useState } from 'react';

const ReviewRow = ({ singleReview }) => {

    const { _id, userName, email, image, service, review } = singleReview;

    // const [reviewService, setReviewSeervice] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/reviews?service=${service}`)
    //         .then(res => res.json())
    //         .then(data => setReviewSeervice(data));

    // }, [_id])

    // const handleDelete = (_id) => {
    //     const proceed = window.confirm('Are you sure ?');
    //     if (proceed) {
    //         fetch(`http://localhost:5000/reviews/${_id}`,{
    //             method:'DELETE'
    //         })
    //         .then(res=>res.json())
    //         .then(data=>{
    //             console.log(data);
    //         })
    //     }
    // }

    return (
        <tr>
            <th>
                
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                // reviewService?.image &&
                                <img src={image} alt="Avatar Tailwind CSS Component" />

                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{userName}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>

                <br />
                <span className="badge badge-ghost badge-sm">{review}</span>
            </td>
        </tr>
    );
};

export default ReviewRow;