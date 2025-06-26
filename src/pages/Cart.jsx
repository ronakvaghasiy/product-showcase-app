import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <li key={index} className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right font-bold text-xl">
            Total: ${total}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
