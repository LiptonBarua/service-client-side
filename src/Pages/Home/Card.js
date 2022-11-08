import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
   const {img, title, price, details, _id} = card;
    return (
        <div>
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h2>Price: ${price}</h2>
    <p>{details.length>100? details.slice(0,100)+'...': details}</p>
    <div className="card-actions justify-end">
      <Link to={`/service/${_id}`}><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;