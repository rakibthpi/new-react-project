import React from 'react';
import Gf from '../Gf/Gf';

const Myself = ({ number }) => {
    return (
        <div className='border-solid border-2 border-r-blue-700 m-5'>
            <h1>Myself</h1>
            <p>Number:{number}</p>
            <Gf number={number}></Gf>
        </div>
    );
};

export default Myself;