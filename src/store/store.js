import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import { addToCart, deliteFromCart, fetchProductsAction } from './actions';

//  {
//     id: null,
//     title: '',
//     price: 0,
//     description: '',
//     image: ''
//   }

const initialState = {
  products: [],
  status: null,
  error: null
};

const reducer = createReducer(initialState, {
  [addToCart]: (state, action) => {
    return {
      ...state,
      products: [...state.products, action.payload]
    };
  },
  [deliteFromCart]: (state, action) => {
    return {
      ...state,
      products: state.products.filter(
        (product) => product.id !== action.payload
      )
    };
  },
  [fetchProductsAction]: (state, action) => {
    return {
      ...state,
      products: action.payload
    };
  }
});

// const productsFromServer = createReducer([], {
//   [fetchProducts.fulfilled]: (_, action) => action.payload
// });

// const productsLoading = createReducer(false, {
//   [fetchProducts.pending]: () => true,
//   [fetchProducts.fulfilled]: () => false,
//   [fetchProducts.rejected]: () => false
// });

// const productsLoadingError = createReducer(false, {
//   [fetchProducts.pending]: (_, action) => action.payload,
//   [fetchProducts.fulfilled]: () => false,
//   [fetchProducts.rejected]: () => false
// });

const rootReducer = combineReducers({
  products: reducer
  // productsFromServer,
  // productsLoading,
  // productsLoadingError
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
