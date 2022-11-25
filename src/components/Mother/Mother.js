import React from 'react';
import Sister from '../Sister/Sister';
import Aunty from '../Aunty/Aunty';

const Mother = ({ number }) => {
    return (
        <div className='border-solid border-orange-700 border-2 max-w-full'>
            <h1>Mother</h1>
            <p>Number: {number}</p>
            <div className='mother-sub border-solid border-red-700 m-2 border-2 flex'>
                <Sister number={number}></Sister>
                <Aunty number={number}></Aunty>
            </div>
        </div>
    );
};

export default Mother;