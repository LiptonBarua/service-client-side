import React, { useEffect, useState } from 'react';
import { Link, useLoaderData} from 'react-router-dom';
import Card from './Card';
import './Home.css'


const Home = () => {
  // const {service, count} =useLoaderData([])
const [service, setService] = useState([]);
const[count, setCount] = useState(0);
const[page, setPage] =useState(0);
const [size, setSize] = useState(3)



useEffect (()=>{
const url =`https://assiament-server.vercel.app/service?page=${page}&size=${size}`
 fetch(url)
 .then(res=>res.json())
 .then(data=>{
    setCount(data.count)
    setService(data.service)
})
},[page, size])

const pages = Math.ceil(count/size);




    return (
        <div className=' '>
          <div className="hero min-h-screen container mx-auto" style={{ backgroundImage: `url("https://securecdn.pymnts.com/wp-content/uploads/2022/10/food-delivery-1000x600.jpg")` }}>
  <div className=""></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-black font-bold"> Online Commercila Deilvery Service</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
  
    </div>
  </div>
</div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10 container mx-auto'>
          
             {
               service.map(card=><Card key={card._id} card={card} ></Card>)
             }
           </div>
           <div className="text-center my-5">
				<div className="pagination ">
					{[...Array(pages).keys()].map((number) => (
						<button
							key={number}
							className={page === number ? 'selected' : 'selected1'}
							onClick={() => setPage(number)}
						>
							{number + 1}
						</button>
					))}
				</div>
			</div>
           <div className='grid justify-items-center my-10'>
           <Link to='/items'><button className="btn btn-orange ">See More</button></Link>
           </div>
          
            
        </div>
    );
};

export default Home;