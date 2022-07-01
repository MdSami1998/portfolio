import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const menuItem = <>
        <li><Link to="/home" className='text-white font-semibold hover:border-b-2 border-primary text-lg'>Home</Link></li>

        <li><Link to="/about" className='text-white font-semibold hover:border-b-2 border-primary text-lg'>About</Link></li>

        <li><Link to="/projects" className='text-white font-semibold hover:border-b-2 border-primary text-lg'>Project</Link></li>

        <li><Link to="/contact" className='text-white font-semibold hover:border-b-2 border-primary text-lg'>Contact</Link></li>
    </>
    return (
        <div class="navbar  px-0 md:px-20  w-full sticky top-0 z-10 bg-base-100">
            <div class="navbar-start w-full">
                <div class="dropdown lg:hidden">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <div className='mx-auto lg:mx-0'>
                    <Link to='/' className="uppercase text-2xl md:text-3xl font-black tracking-widest text-primary navHead">MD. Sami Al Zaber</Link>
                </div>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;