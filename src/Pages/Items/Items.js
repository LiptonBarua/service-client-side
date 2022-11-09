
import { useLoaderData } from 'react-router-dom';
import ItemsDetails from './ItemsDetails';


const Items = () => {
    const{service} = useLoaderData([])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10 container mx-auto'>
           
           {
            service.map(item=><ItemsDetails key={item._id} item={item}></ItemsDetails>)
           }
        </div>
    );
};

export default Items;