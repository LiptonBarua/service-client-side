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
        <div>
           <h1>{items.details}</h1>
           {
            items.map(item=><ItemsDetails></ItemsDetails>)
           }
        </div>
    );
};

export default Items;