import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
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
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
