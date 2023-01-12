import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  singleProduct: [{}],
};

export const editProductAsync = createAsyncThunk(
  "editSingleProduct",
  async (product) => {
    const { id, name, price, description, imageUrl, quantity } = product;
    const updateProduct = { name, price, description, imageUrl, quantity };
    const { data } = await axios.put(`/api/products/${id}`, updateProduct);
    return data;
  }
);


const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.singleProduct = action.payload;
    });

    builder.addCase(editProductAsync.fulfilled, (state, action) => {
      state.singleProduct = action.payload;
    });
  },
});

export const selectSingleProduct = (state) => {
  return state.singleProduct;
};

export default singleProductSlice.reducer;
