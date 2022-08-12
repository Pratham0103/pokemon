import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeItem: (state, action) => {
      console.log(action.payload);
      state.products.map((poke, index)=>{
        if (poke === action.payload)
        {
            state.products.splice(index, 1);
            console.log(poke);
        }
      });
    },
  },
});

export const { addProduct, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
