import React from 'react';
import Navbar from '../components/shared/Navbar';
import { montserrat } from '../layout';
// import { Montserrat, } from 'next/font/google';

// const montserrat = Montserrat({
//     variable: "--font-montserrat",
//     subsets: ["latin"],
//     //   weight: [ "100", "200", "300", "400", "500", "600", "700", "800", "900"
//     // ]
// });

const AuthLayout = ({ children }) => {
    return (
        <div className={`${montserrat.className}`}>
            <Navbar />
            {children}
        </div>
    );
};

export default AuthLayout;