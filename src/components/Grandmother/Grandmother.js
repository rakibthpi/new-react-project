import React from 'react';
import Father from './../Father/Father';
import Mother from './../Mother/Mother';

const Grandmother = ({ number }) => {


    return (
        <div>
            <h1>Grandmother</h1>
            <p>Number : {number}</p>
            <div className='grandmother flex justify-between'>
                <Father number={number}></Father>
                <Mother number={number}></Mother>
            </div>
        </div>
    );
};

export default Grandmother;