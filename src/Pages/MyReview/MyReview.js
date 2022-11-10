import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {

    useTitle('My Review')

    const { user } = useContext(AuthContext);

    const [myReview, setMyReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data))

    }, [user?.email])


    const handleDelete = (id) => {

        const proceed = window.confirm('are you sure? ')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // if(data.deletedCount>0){
                    //     alert('deleted successfully')
                    //     const remaining = 
                    // }
                })
        }

    }

    return (
        <div>
            {
                myReview?.length === 0 ?
                    <>
                        <h2 className='text-5xl font-semibold text-center flex justify-center my-40'>no review added</h2>
                    </>
                    :
                    <>
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
                                            handleDelete={handleDelete}
                                        ></MyReviewRow>)
                                    }
                                </tbody>



                            </table>
                        </div>
                    </>
            }
        </div>
    );
};

export default MyReview;