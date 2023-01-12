import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {}


export const fetchSingleUserAsync = createAsyncThunk("singleUser", async (id) => {
      const { data } = await axios.get(`/api/users/${id}`);
      return data;
    })

    
    const singleUserSlice = createSlice({
        name: "singleUser",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
          builder.addCase(fetchSingleUserAsync.fulfilled, (state, action) => {
            console.log("PAYLOAD: ",action.payload)
            return action.payload
          });
        },
      });

      export const selectSingleUser = (state) => {
        console.log("STATE:", state)
        return state.singleUser;}

      export default singleUserSlice.reducer