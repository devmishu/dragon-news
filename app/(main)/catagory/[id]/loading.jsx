import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='my-50 flex flex-col justify-center items-center'>
            <HashLoader />
        </div>
    );
};

export default loading;