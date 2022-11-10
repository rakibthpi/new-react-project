import React from 'react';

const Tshart = ({ tshart, addToCart }) => {
    const { name, picture, price } = tshart;

    return (
        <div className='singleTshart'>
            <img src={picture} alt="photos" />
            <div className='singleTshartText'>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
                <button className='btn-primary' onClick={() => { tshart() }}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Tshart;