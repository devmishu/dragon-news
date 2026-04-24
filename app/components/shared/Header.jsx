import Image from 'next/image';
import React from 'react';
import { format, compareAsc } from "date-fns";

import logo from '@/app/assets/logo.png'


const Header = () => {
    return (
        <div className='flex flex-col gap-3 jus items-center '>
            <Image src={logo} alt="logo" className='w-60 sm:w-90 md:w-117' />
            <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-[#403F3F] font-medium'>{format(new Date(), "EEEE, MMMM dd yyyy")}</p>
        </div>
    );
};

export default Header;