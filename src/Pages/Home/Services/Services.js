import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useTitle('home');

    useEffect(() => {
        fetch('https://sports-photography-server-sojeeb01768.vercel.app/services')
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

                <Link to='allservice'>
                    <button className='btn btn-primary my-5'>See More</button>

                </Link>
            </div>
        </div>
    );
};

export default Services;