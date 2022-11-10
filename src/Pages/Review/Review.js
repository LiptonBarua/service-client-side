import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ReviewDetails from './ReviewDetails';

const Review = () => {
    const {user} = useContext(AuthContext);
    const[review, setReview] = useState([]);
    console.log(review)

    useEffect(()=>{
        if(user?.email){
            fetch(`https://assiament-server.vercel.app/orders?serviceName=${user?.serviceName}`,{
              headers:{
                authorization: `Bearer ${localStorage.getItem('assianment')}`
              }
            })
            .then(res=>res.json())
            .then(data=>setReview(data))
        }
        }, [user?.email])

        const handleDelete=id=>{
          const procced = window.confirm('Are you sure, you want to cancel this order');
          if(procced){
           fetch(`https://assiament-server.vercel.app/orders/${id}`,{
               method: 'DELETE'
           })
           .then(res=>res.json())
           .then(data=>{
               console.log(data)
               if(data.deletedCount){
                alert('deleted successfully');
                const remaining =review.filter(ods=>ods._id!==id);
               setReview(remaining);
               }
           })
          }
      }
    return (
         <div>
<div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>User Name and Photo</th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        review.map(review=><ReviewDetails key={review._id} review={review} handleDelete={handleDelete}></ReviewDetails>)
      }
    </tbody>

  </table>
</div>

         </div>
       );
};

export default Review;
