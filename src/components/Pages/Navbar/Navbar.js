import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const menuItem = <>
        <li><Link to="/" className='text-white font-semibold text-lg'>Home</Link></li>

        <li><Link to="/about" className='text-white font-semibold text-lg'>About</Link></li>

        <li><Link to="/projects" className='text-white font-semibold text-lg'>Project</Link></li>

        <li><Link to="/contact" className='text-white font-semibold text-lg'>Contact</Link></li>
    </>
    return (
        <div className="navbar  px-0 md:px-20  w-full sticky top-0 z-10 bg-base-100">
            <div className="navbar-start w-full">
                <div className="dropdown lg:hidden">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <div className='mx-auto lg:mx-0'>
                    <Link to='/' className="uppercase text-2xl md:text-3xl font-black tracking-widest text-primary navHead">MD. Sami Al Zaber</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;