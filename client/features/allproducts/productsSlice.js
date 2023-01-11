import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchProductsAsync = createAsyncThunk("allProducts", async () => {
      const { data } = await axios.get(`/api/products`);
      return data;
    });

    export const addProductAsync = createAsyncThunk("addProduct", async ({name, price, description, imageUrl, quantity}) => {
      
      const { data } = await axios.post(`/api/products`, {name, price, description, imageUrl, quantity});
        return data;
      });

      export const deleteSingleProductAsync = createAsyncThunk("deleteSingleProduct", async (id) => {
        const { data } = await axios.delete(`/api/products/${id}`);
        return data;
      })

  const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
        return action.payload;
      });
      builder.addCase(addProductAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      });
    },
  });

  export const selectProducts = (state) => {
    return state.products;}

  export default productSlice.reducer