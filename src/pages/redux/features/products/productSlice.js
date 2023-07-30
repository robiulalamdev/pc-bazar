import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviewMessage: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setReviewMessage: (state, action) => {
      state.reviewMessage = action.payload;
    },
  },
});

export const { setReviewMessage } = productSlice.actions;

export default productSlice.reducer;
