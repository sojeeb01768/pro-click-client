import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpeg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaGoogle, FaUser } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(err => console.error(err))
    }

    const menuIitems = <>
        <li className='font-semibold'><Link to="/">Home</Link></li>
        <li className='font-semibold'><Link to="allreviews">All review</Link></li>
        <li className='font-semibold'><Link to="blog">Blog</Link></li>


    </>

    return (
        <div className="navbar bg-base-200 my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuIitems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='w-12 rounded-full' src={logo} alt="" />
                    <span className='text-3xl ml-2'>ProClick</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal p-0">
                    {menuIitems}
                </ul>

            </div>
            <div className="navbar-end">

                {
                    user?.uid ?
                        <>
                            <span className='font-semibold'><Link to="myreview">My Review</Link></span>
                            <span className='ml-2'>{user?.displayName}</span>
                            <button onClick={handleLogOut} className='btn ml-2'>Logout</button>
                        </>
                        :
                        <>
                            <Link to='/login'><button className='btn'>Login</button></Link>

                        </>
                }

                {user?.photoURL ?
                    <img className='h-10 rounded-full ml-2' src={user?.photoURL} alt="" />
                    : <FaUser className='ml-2'></FaUser>
                }
            </div>
        </div>
    );
};

export default Header;