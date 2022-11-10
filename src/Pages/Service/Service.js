import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Service = () => {
  const{user} =useContext(AuthContext)
    const cardsDetails = useLoaderData()
    const {img, title, price, details, _id} = cardsDetails;


    const handleReview=(event)=>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value
      const email = user?.email || 'unregister';
      const message = form.message.value;
      const phone = form.phone.value;
      const phote= form.img.value;

      const order={
        service: _id,
        serviceName: title,
        price,
        customer: name,
        email,
        phone, 
        message,
        phote
    }
    if(phone.length>10){
      alert('Phone number should be 11 character');
    }
    fetch('http://localhost:5000/orders',{
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        alert('order please successfully')
        form.reset();
      }
      console.log(data)
    })
    .catch(error=>console.error(error))
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 container mx-auto'>
            <div>
  <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <PhotoProvider>
    <PhotoView src={img}>
    <figure><img src={img} alt="" /></figure>
    </PhotoView>
  </PhotoProvider>
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
        <div>
        <form onSubmit={handleReview} className='bg-orange-600 p-10 my-16 rounded-2xl'>
        <h2 className='text-3xl my-8'>My Service: {title}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <input name='img' type="text" placeholder="Photo URL" className="input input-bordered w-full" required/>
            <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full" required/>
            <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" required/>
            <input name='price' type="text" placeholder="Your Price" className="input input-bordered w-full" required/>
            <input name='email' type="text" placeholder="Email Id" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
        </div>
        <textarea name='message' className="textarea textarea-primary w-full h-24 my-5" placeholder="You are Message" required></textarea>
        <input name='' className='btn my-3' type="submit" value="Please Your Order" />
       </form>
        </div>
        </div>
    );
};

export default Service;