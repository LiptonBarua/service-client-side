import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Service = () => {
    const cardsDetails = useLoaderData()
    const {img, title, price, details, _id} = cardsDetails;
    return (
        <div className='grid justify-items-center'>
            <div>
  <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h2>Price: ${price}</h2>
    <p className='text-justify'>{details}</p>
    <div className="card-actions justify-end">
      <Link to='/items'><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
        </div>
        
        </div>
    );
};

export default Service;