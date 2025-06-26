import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchCategories } from '../api';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    fetchProducts().then(res => {
      setProducts(res.data);
      setFiltered(res.data);
    });
    fetchCategories().then(res => setCategories(res.data));
  }, []);

  useEffect(() => {
    let data = [...products];
    if (selectedCategory !== 'all') {
      data = data.filter(p => p.category === selectedCategory);
    }
    if (sortOption) {
      data.sort((a, b) => {
        if (sortOption === 'price') return a.price - b.price;
        if (sortOption === 'rating') return b.rating.rate - a.rating.rate;
        if (sortOption === 'name') return a.title.localeCompare(b.title);
        return 0;
      });
    }
    setFiltered(data);
    setCurrentPage(1);
  }, [selectedCategory, sortOption, products]);

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentProducts = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="p-4 overflow-x-hidden w-full">
      <div className="flex flex-wrap gap-4 mb-4">
        <select onChange={(e) => setSelectedCategory(e.target.value)} className="border p-2">
          <option value="all">All Categories</option>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <select onChange={(e) => setSortOption(e.target.value)} className="border p-2">
          <option value="">Sort</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="name">Name</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(totalPages)].map((_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
