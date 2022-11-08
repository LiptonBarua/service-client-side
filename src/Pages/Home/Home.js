import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from './Card';
import logo from '../../assets/vegan-bowl-healthy-tasty-food-removebg-preview.png'

const Home = () => {
 const cards = useLoaderData();

    return (
        <div className='container mx-auto '>
          <div className="hero min-h-screen" style={{ backgroundImage: `url("https://securecdn.pymnts.com/wp-content/uploads/2022/10/food-delivery-1000x600.jpg")` }}>
  <div className=""></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-black font-bold"> Online Commercila Deilvery Service</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
  
    </div>
  </div>
</div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10'>
          
             {
               cards.map(card=><Card key={card._id} card={card}></Card>)
             }
           </div>
           <div className='grid justify-items-center my-10'>
           <Link to='/items'><button className="btn btn-active ">See More</button></Link>
           </div>
            <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
            </div>
            
        </div>
    );
};

export default Home;