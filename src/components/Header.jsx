import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cartItems, message } = useContext(CartContext);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md p-4 flex justify-between items-center relative">
      <Link to="/" className="text-2xl font-bold">🛍️ ShopZone</Link>
      <nav className="space-x-6 text-lg">
        <Link to="/" className="hover:text-gray-100">Home</Link>
        <Link to="/cart" className="relative hover:text-gray-100">
          Cart <span className="ml-1 px-2 py-0.5 bg-white text-blue-700 rounded-full text-sm">{cartItems.length}</span>
        </Link>
      </nav>
      {message && (
        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded shadow">
          {message}
        </div>
      )}
    </header>
  );
};

export default Header;
