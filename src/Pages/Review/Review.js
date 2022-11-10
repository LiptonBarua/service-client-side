import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ReviewDetails from './ReviewDetails';

const Review = () => {
    const {user} = useContext(AuthContext);
    const[review, setReview] = useState([]);
    console.log(review)

    useEffect(()=>{
        if(user?.email){
            fetch(`http://localhost:5000/orders?email=${user?.email}`,{
              headers:{
                authorization: `Bearer ${localStorage.getItem('assianment')}`
              }
            })
            .then(res=>res.json())
            .then(data=>setReview(data))
        }
        }, [user?.email])
    return (
        <div>
        <h1>{review?.length}</h1>
        <div className="overflow-x-auto w-full">
<table className="table w-full">

<thead>
  <tr>
    <th>
      <label>
        <input type="checkbox" className="checkbox" />
      </label>
    </th>
    <th>Name</th>
    <th>Job</th>
    <th>Favorite Color</th>
    <th></th>
  </tr>
</thead>
<tbody>

  {
    review.map(review=><ReviewDetails key={review._id} review={review}></ReviewDetails>)
  }
</tbody>

</table>
</div>
</div>
    );
};

export default Review;