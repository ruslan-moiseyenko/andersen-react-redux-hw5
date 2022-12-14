import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('cart/ADD_TO_CART');
export const deliteFromCart = createAction('cart/DELITE_FROM_CART');
export const emptyCart = createAction('cart/EMPTY_CART');
export const changeLimit = createAction('products/CHANGE_LIMIT');
