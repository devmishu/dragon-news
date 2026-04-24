"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const curentPath = usePathname();
    console.log(curentPath);
    return (
        <div>
            <Link href={href} className={`${href === curentPath && "bg-red-500 text-white py-1 px-3"}`}>{children}</Link>
        </div>
    );
};

export default NavLink;