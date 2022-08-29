import { createAsyncThunk } from '@reduxjs/toolkit';

const prodURL = 'https://fakestoreapi.com/products';

export const fetchProducts = createAsyncThunk(
  'products/FETCH_PRODUCTS',
  async () => {
    try {
      const response = await fetch(prodURL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
