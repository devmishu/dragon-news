import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import Image from 'next/image';

import user from '@/app/assets/user.png'

const Navbar = () => {
    return (
        <div className="navbar mt-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink href="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink href="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink href="/career">Career</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink href="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink href="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink href="/career">Career</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Image src={user} alt="logo" className='mr-3' />
                <Link
                    href="/login"
                    className='bg-[#403F3F] text-white text-2xl font-bold py-2 px-10'
                >
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;