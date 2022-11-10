import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {

    useTitle('Add Service')

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const imageURL = form.imageURL.value;
        const details = form.details.value;
        console.log(serviceName, price, imageURL, details);


        const service = {
            service_name: serviceName,
            price: price,
            image: imageURL,
            details


        }
        fetch('http://localhost:5000/all', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('service Added ')
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }



    return (
        <div>
            <h2 className='text-center text-5xl font-semibold my-4'>
                Add Service
            </h2>
            <form onSubmit={handleAddService} className='mx-20'>
                <div >
                    <input name='serviceName' type="text" placeholder="Service name" className="input input-bordered w-full" required />
                    <input name='price' type="number" placeholder="price" className="input input-bordered w-full " required />
                    <input name='imageURL' type="text" placeholder="image URL" className="input input-bordered w-full " required />
                </div>

                <textarea name='details' className="textarea textarea-primary w-full" placeholder="add details"></textarea>
                <input className='btn' type="submit" value="Add to service" required />
            </form>


        </div>
    );
};

export default AddService;