import React from 'react';
import { FaRegTimesCircle } from "react-icons/fa";

const MyReviewRow = ({ singleReview }) => {

    const { _id, serviceName, review, email, userName, image } = singleReview;

    const handleDelete = (id) => {

        const proceed = window.confirm('are you sure? ')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }

    }

    return (


        <tr>

            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className=''><FaRegTimesCircle className='text-2xl'></FaRegTimesCircle></button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {

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
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{review}</span>
            </td>


        </tr>
    );
};

export default MyReviewRow;