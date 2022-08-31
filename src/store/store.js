import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import { addToCart, deliteFromCart, emptyCart, changeLimit } from './actions';
import { fetchProducts } from './asyncActions/getProducts';
import { addItemToCart } from '../utils/addItemToCart';

const initialState = {
  products: [],
  cart: [],
  status: null,
  error: null,
  limit: 5
};

const reducer = createReducer(initialState, {
  [addToCart]: (state, action) => {
    return {
      ...state,
      cart: addItemToCart(state.cart, action.payload)
    };
  },
  [emptyCart]: (state, action) => {
    return {
      ...state,
      cart: []
    };
  },
  [deliteFromCart]: (state, action) => {
    return {
      ...state,
      cart: state.cart.filter((product) => product.id !== action.payload)
    };
  },

  [changeLimit]: (state, action) => {
    return {
      ...state,
      limit: state.limit + 5
    };
  },

  [fetchProducts.fulfilled]: (state, action) => {
    return {
      ...state,
      products: action.payload,
      status: 'fulfilled'
    };
  },
  [fetchProducts.pending]: (state, action) => {
    return {
      ...state,
      status: 'pending'
    };
  },
  [fetchProducts.rejected]: (state, action) => {
    return {
      ...state,
      error: true,
      status: 'rejected'
    };
  }
});

const rootReducer = combineReducers({
  products: reducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
