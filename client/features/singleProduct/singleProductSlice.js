import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  singleProduct: {},
};

export const fetchSingleProduct = createAsyncThunk(
  "singleProduct",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const editSingleProduct = createAsyncThunk(
  "editProduct",
  async (product) => {
    try {
      const { data } = await axios.put(`/api/products/${product.id}`, product);
      return data;
    } catch (err) {
      console.log(err);
    }
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
    builder.addCase(editSingleProduct.fulfilled, (state, action) => {
      state.singleProduct = action.payload;
    });
  },
});

export const selectSingleProduct = (state) => {
  return state.singleProduct;
};

export default singleProductSlice.reducer;
