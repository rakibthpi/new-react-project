import React from 'react';

const Cart = ({ cart, handelRemoveItem }) => {
    return (
        <div>
            <h1 className='text-3xl font-bold'>This is cart js page {cart.length} </h1>
            {
                cart.map(scart => <div className='cardItem' key={scart._id}>
                    <h2>Name: {scart.name}</h2>
                    <button onClick={() => handelRemoveItem(scart)} className='bg-red-600 py-2 px-10'>Delete</button>
                </div>)
            }
        </div>
    );
};

export default Cart;



// <div>
//     <h1>This is cart js page {cart.length} </h1>
//     {
//         cart.map((cart) => {
//             const { _id, name } = cart;

//             console.log(cart);
//             // const { } = cart;
//             return <article key={_id}>
//                 <p>Name:{name}</p>
//                 <button>Delete</button>
//             </article>
//         })
//     }
// </div>