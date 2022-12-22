import React from 'react';
const AddProduct = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        const service = {
          title: event.target.title.value,
          details: event.target.details.value,
          price: parseInt(event.target.price.value),
          img: event.target.img.value
        };
        
     
        fetch("https://assiament-server.vercel.app/service", {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
        .then(res=>res.json())
        .then(data=>{
            
            
            console.log(data)})
       
    }
    return (
        <div className='grid justify-items-center my-10'>
        <div data-theme="black" className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
     <h1 className="text-2xl font-bold text-center">Add Product</h1>
     <form onSubmit={handleSubmit}  novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
         <div className="space-y-1 text-sm">
             <label for="" className="block dark:text-gray-400">Photo Url</label>
             <input type="text" name="img" id="" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
         </div>
         <div className="space-y-1 text-sm">
             <label for="" className="block dark:text-gray-400">Title</label>
             <input type="text" name="title" id="" placeholder="Title" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
         </div>
         <div className="space-y-1 text-sm">
             <label for="" className="block dark:text-gray-400">Price</label>
             <input type="text" name="price" id="" placeholder="Price" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
         </div>
         <div className="space-y-1 text-sm">
             <label for="" className="block dark:text-gray-400">Description</label>
             <textarea type="text" name="details" id="" placeholder="Description" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"></textarea>

         </div>
       
         <button className="block w-full bg-info p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Add</button>
     </form>
   
   
     
    
   
 </div>
   </div>
    );
};

export default AddProduct;