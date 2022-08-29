import { createAsyncThunk } from '@reduxjs/toolkit';

const prodURL = 'https://fakestoreapi.com/products';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await fetch(prodURL);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
