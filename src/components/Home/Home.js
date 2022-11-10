import React, { useState } from 'react';
import useTShart from '../../hooks/useTShart';
import Tshart from '../Tshart/Tshart';

const Home = () => {
    const [tshart, setTshart] = useTShart();

    const [cart, setCart] = useState([]);
    const addToCart = (selectItem) => {
        console.log(selectItem);
    }
    return (
        <div className='mainCart'>
            <div className="tShartArea">
                {
                    tshart.map(sShart => <Tshart
                        key={sShart._id}
                        tshart={sShart}
                        addToCart={addToCart}
                    ></Tshart>)
                }
            </div>
            <div className="cartArea">
                <div className="cartSubArea">
                    <h1>Hello rakib How are you </h1>
                </div>
            </div>
        </div>
    );
};

export default Home;