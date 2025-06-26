import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white flex flex-col">
      <img src={product.image} alt={product.title} className="h-48 object-contain bg-gray-50 p-4" />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="font-semibold text-base mb-2 line-clamp-2">{product.title}</h2>
        <p className="text-blue-600 font-bold mb-1 text-lg">${product.price}</p>
        <p className="text-yellow-500 text-sm mb-3">⭐ {product.rating.rate}</p>
        <Link to={`/product/${product.id}`} className="mt-auto text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
