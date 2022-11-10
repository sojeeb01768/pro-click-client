import React, { useEffect, useState } from 'react';
import AllServiceCardView from './AllServiceCardView';

const AllServices = () => {
    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        fetch('https://sports-photography-server-sojeeb01768.vercel.app/all')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-sky-700 my-10'>My Photography Packages</h2>
            </div>
            <div className='grid grid-cols-1  lg:grid-cols-3 gap-6'>

                {
                    allServices.map(single => <AllServiceCardView
                        key={single._id}
                        single={single}
                    ></AllServiceCardView>)
                }
            </div>
        </div>
    );
};

export default AllServices;