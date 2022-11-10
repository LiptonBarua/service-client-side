import AddProduct from "../../Pages/AddProduct/AddProduct";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Items from "../../Pages/Items/Items";
import Login from "../../Pages/Login/Login";
import Main from "../../Pages/Main/Main";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";
import ReviewDetails from "../../Pages/Review/ReviewDetails";
import Service from "../../Pages/Service/Service";
import PrivateRouter from "../PriveteRouter/PrivateRouter";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
 {
    path: '/', element: <Main></Main>, children: [
        {
            path: '/', 
            element: <PrivateRouter><Home></Home></PrivateRouter>
          
        },
        {
            path: '/service/:id', 
            element: <PrivateRouter><Service></Service></PrivateRouter>,
            loader: ({params})=>fetch(`https://assiament-server.vercel.app/service/${params.id}`)
        },
        {
            path: '/items', 
            element: <PrivateRouter><Items></Items></PrivateRouter>,
            loader: ()=>fetch('https://assiament-server.vercel.app/service')
        },
        {
            path: '/blog', element: <PrivateRouter><Blog></Blog></PrivateRouter>
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
            element: <PrivateRouter> <Review></Review></PrivateRouter>
        },
        {
            path: '/reviewDetails',
            element: <PrivateRouter><ReviewDetails></ReviewDetails></PrivateRouter>
        }
    ]
 },
 {path: "*", element: <h1 className="text-center text-2xl">This is a not Found: 404 </h1>}
])
export default router;