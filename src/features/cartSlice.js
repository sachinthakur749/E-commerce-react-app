import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../data/ProductsData";

const initialState = {
  cartItem: [],
  productsData: productsData,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (Item) => Item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(tempProduct);
      }
    },

    removeFromCart(state, action) {
      const nextCartItems = state.cartItem.filter(
        (cartItem, ind) => cartItem.id !== action.payload.id
      );
      state.cartItem = nextCartItems;
    },

    decreaseQuantity(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (Item) => Item.id === action.payload.id
      );

      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItem.filter(
          (cartItem, ind) => cartItem.id !== action.payload.id
        );
        state.cartItem = nextCartItems;
      }
    },

    increaseQuantity(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItem[itemIndex].cartQuantity >= 1) {
        state.cartItem[itemIndex].cartQuantity += 1;
      }
    },

    addToList(state, action) {
      state.productsData.push(action.payload);
      console.log(state.productsData);
      console.log(action.payload.id);
    },

    removeFromList(state, action) {
      state.productsData = state.productsData.filter((item) => item.id !== action.payload.id);
      console.log("sachin")
    },
  },
});

export const {
  addToCart,
  addToList,
  removeFromList,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
