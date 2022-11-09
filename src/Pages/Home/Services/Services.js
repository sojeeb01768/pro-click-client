import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://sports-photography-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-sky-700 my-10'>My Photography Packages</h2>
            </div>
            <div className='grid grid-cols-1  lg:grid-cols-3 gap-6'>

                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center'>
                <button className='btn btn-primary my-5'><Link to=''></Link>See More</button>
            </div>
        </div>
    );
};

export default Services;