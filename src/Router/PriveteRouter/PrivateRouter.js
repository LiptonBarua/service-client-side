import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const loacation = useLocation();
    if(loading){
        return  <div>
                <div className="w-16 bg-info h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
           </div>
    }
   if(!user){
    return <Navigate to='/login' state={{from: loacation}} replace></Navigate>
   }
   return children;
};

export default PrivateRouter;

