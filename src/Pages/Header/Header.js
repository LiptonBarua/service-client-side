import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut=()=>{
    logOut()
    .then()
    .catch()
  }
    return (
        <div  className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link to='/'>Home</Link>
           <Link to='/items'>Service</Link>
           <Link to='/blog'>Blog</Link>
           {
            user?.email?
            <>
              <Link to='/addProduct'>Add Product</Link>
              <Link to='/review'>My Reviews</Link>
              <Link onClick={handleLogOut} className='font-extrabold'><button className="btn-ghost">Sign Out</button></Link>
            </>
            :
            <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
           </>
           }
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">Online Shop</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
           <Link to='/'>Home</Link>
           <Link to='/items'>Service</Link>
           <Link to='/blog'>Blog</Link>
           {
            user?.email?
            <>
              <Link to='/addProduct'>Add Product</Link>
              <Link to='/review'>My Reviews</Link>
              <Link onClick={handleLogOut} className='font-extrabold'><button className="btn-ghost">Sign Out</button></Link>
            </>
            :
            <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
           </>
           }
          
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    );
};

export default Header;