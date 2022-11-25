import React, { useContext } from 'react';
import { RingContex } from '../Granpa/Granpa';

const Gf = ({ number }) => {
    const { value } = useContext(RingContex);
    const [rakib, hosen] = value;

    return (
        <div>
            <h1>Girl Friend</h1>
            <p>Number: {number}</p>
            <p>Personal:{rakib}</p>
            <p>Personal:{hosen}</p>
        </div>
    );
};

export default Gf;