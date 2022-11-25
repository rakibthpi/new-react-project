import React, { useState } from 'react';
import useTShart from '../../hooks/useTShart';
import Cart from '../Cart/Cart';
import Tshart from '../Tshart/Tshart';

const Home = () => {
    const [tshart, setTshart] = useTShart();

    const [cart, setCart] = useState([]);
    const addToCart = (selectItem) => {
        const axsis = cart.find(tShart => tShart._id === selectItem._id);
        if (!axsis) {
            let newItem = [...cart, selectItem];
            setCart(newItem)
        }
        else {
            alert("This is alrady axsis");
        }

    }
    const handelRemoveItem = (SelectionItem) => {
        const rest = cart.filter(tshart => tshart._id !== SelectionItem._id);
        setCart(rest);
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
                    <Cart
                        cart={cart}
                        handelRemoveItem={handelRemoveItem}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;