import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Uncle from '../Uncle/Uncle';

const Father = ({ number }) => {
    return (
        <div className='border-solid border-orange-700 m-2 border-2 max-w-full'>
            <h1>Father</h1>
            <p>Number: {number}</p>
            <div className='father-sub border-solid border-red-700 m-2 border-2 flex'>
                <Myself number={number}></Myself>
                <Brother number={number}></Brother>
                <Uncle number={number}></Uncle>
            </div>
        </div>
    );
};

export default Father;