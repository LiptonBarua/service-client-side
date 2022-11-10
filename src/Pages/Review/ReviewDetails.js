import React, { useEffect, useState } from 'react';

const ReviewDetails = ({review}) => {
    const {_id, serviceName,price, customer, phone, service, message, phote} =review;
    const[reviewService, setReviewService] =useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/service/${service}`)
        .then(res=>res.json())
        .then(data=>setReviewService(data))
       },[service])
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={phote} alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
         {serviceName}
         
        </td>
        <td>{message}</td>
        <th>
          <button className="btn btn-ghost btn-xs">$ {price}</button>
        </th>
      </tr>
    );
};

export default ReviewDetails;