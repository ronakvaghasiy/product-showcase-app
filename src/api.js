import axios from 'axios';

const API_BASE = 'https://fakestoreapi.com';

export const fetchProducts = () => axios.get(`${API_BASE}/products`);
export const fetchProductById = (id) => axios.get(`${API_BASE}/products/${id}`);
export const fetchCategories = () => axios.get(`${API_BASE}/products/categories`);
