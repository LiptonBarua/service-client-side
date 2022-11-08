import Home from "../../Pages/Home/Home";
import Items from "../../Pages/Items/Items";
import Main from "../../Pages/Main/Main";
import Service from "../../Pages/Service/Service";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
 {
    path: '/', element: <Main></Main>, children: [
        {
            path: '/', 
            element: <Home></Home>,
            loader: ()=>fetch('http://localhost:5000/service')
        },
        {
            path: '/service/:id', 
            element: <Service></Service>,
            loader: ({params})=>fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
            path: '/items', 
            element: <Items></Items>
        }
    ]
 }
])
export default router;