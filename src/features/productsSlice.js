import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../data/ProductsData";


const initialState = {
  products :productsData,
}


const productSlice = createSlice({
    name : productsData,
    initialState,
    reducers :{
        removeFromList(state,action){
            // const nextCartItems = state.products.filter(
            //   (product, ind) => product.id !== action.payload.id
            // );
            // state.products = nextCartItems;
            console.log('working');

             state.products.filter((item)=>item.id!==action.payload.id)

          },

          addToList(state,action){
            // const itemIndex = state.findIndex(
            //   (item) => item.id === action.payload.id
            // );
            console.log("sss")

            state.products.push(action.payload)
            console.log(action.payload);

            console.log(initialState);

          },

    }
})

export default productSlice.reducer
export const {removeFromList,addToList} = productSlice.actions