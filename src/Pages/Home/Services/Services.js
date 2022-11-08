import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then (res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-sky-700'>Our Packages</h2>
            </div>
            <div>
                <h2>package : {services.length}</h2>;
                {
                    
                }
            </div>
        </div>
    );
};

export default Services;