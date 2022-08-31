import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/FETCH_PRODUCTS',
  async (limit) => {
    const prodURL = `https://fakestoreapi.com/products?limit=${limit}`;
    try {
      const response = await fetch(prodURL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
