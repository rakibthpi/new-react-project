import React, { useState } from 'react';
import useTShart from '../../hooks/useTShart';
import Tshart from '../Tshart/Tshart';

const Home = () => {
    const [tshart, setTshart] = useTShart();

    const [cart, setCart] = useState([]);
    const addToCart = (selectItem) => {
        let newItem = [...cart, selectItem];
        setCart(newItem)
    }

    console.log(cart);
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
                    <p>{cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Home;