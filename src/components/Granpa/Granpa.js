import React, { createContext, useState } from 'react';
import Grandmother from '../Grandmother/Grandmother';
export const RingContex = createContext();

const Granpa = () => {

    const [number, setNumber] = useState(0);
    const handleAddToCard = () => {
        const newNumber = number + 1;
        setNumber(newNumber);
    }
    const handleRemoveToCard = () => {
        const newNumber = number - 1;
        setNumber(newNumber);
    }
    const rakib = "Ami tomake onek valobasi re sotti onek";
    const hosen = "I am realy love you realy love her";
    return (
        <RingContex.Provider value={{ value: [rakib, hosen] }}>
            <div className='grandfather'>
                <div className='container'>
                    <div className='grandfatherText text-center'>
                        <h1>GrandFather</h1>
                        <p>Number: {number}</p>
                        <div className='grandfatherCard'>
                            <Grandmother number={number}></Grandmother>
                        </div>
                        <button onClick={handleAddToCard} className='btn-increse mr-2'>Increase</button>
                        <button onClick={handleRemoveToCard} className='btn-increse'>DisIncrease</button>
                    </div>
                </div>
            </div>
        </RingContex.Provider >
    );
};

export default Granpa;