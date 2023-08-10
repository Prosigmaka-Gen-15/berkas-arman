import { createSelector } from "@reduxjs/toolkit";

export const selectCart = (state) => state.cart;

export const selectCartCount = createSelector(selectCart, (cart) => cart.length);
