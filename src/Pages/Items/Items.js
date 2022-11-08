import React, { useEffect, useState } from 'react';
import ItemsDetails from './ItemsDetails';


const Items = () => {
    const[items, setItems] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10 container mx-auto'>
           
           {
            items.map(item=><ItemsDetails key={item._id} item={item}></ItemsDetails>)
           }
        </div>
    );
};

export default Items;