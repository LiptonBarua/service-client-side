import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Main/Main";
import Service from "../../Pages/Service/Service";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
 {
    path: '/', element: <Main></Main>, children: [
        {
            path: '/', element: <Home></Home>
        },
        {
            path: '/service', element: <Service></Service>
        }
    ]
 }
])
export default router;