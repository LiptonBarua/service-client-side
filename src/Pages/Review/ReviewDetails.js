import React, { useEffect, useState } from 'react';

const ReviewDetails = ({review, handleDelete}) => {
    const {_id, serviceName,price, customer, phone, service, message, phote} =review;
  


    return (
        <tr>
        <th>
        <button  onClick={()=>handleDelete(_id)}  className="btn btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
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