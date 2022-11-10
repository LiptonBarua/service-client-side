import AddProduct from "../../Pages/AddProduct/AddProduct";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Items from "../../Pages/Items/Items";
import Login from "../../Pages/Login/Login";
import Main from "../../Pages/Main/Main";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";
import Service from "../../Pages/Service/Service";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
 {
    path: '/', element: <Main></Main>, children: [
        {
            path: '/', 
            element: <Home></Home>,
          
        },
        {
            path: '/service/:id', 
            element: <Service></Service>,
            loader: ({params})=>fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
            path: '/items', 
            element: <Items></Items>,
            loader: ()=>fetch('http://localhost:5000/service')
        },
        {
            path: '/blog', element: <Blog></Blog>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/addProduct',
            element: <AddProduct></AddProduct>
        },
        {
            path: '/review', 
            element: <Review></Review>
        }
    ]
 },
 {path: "*", element: <h1 className="text-center text-2xl">This is a not Found: 404 </h1>}
])
export default router;