import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlistItems: [],
};


const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setWishlistItems: (state, action) => {
      state.wishlistItems = action.payload;
    },
  },

});

export const {setWishlistItems } = productSlice.actions;

export default productSlice.reducer;
