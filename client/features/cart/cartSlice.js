import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
 
// const token = window.localStorage.getItem(TOKEN)

export const getCart = createAsyncThunk("getCart/", async(userId)=>{
   console.log("HELLO From get cart thunk", userId)
   try{
       const {data} = await axios.get(`/api/cart/${userId}`)
       return data
   }catch(error){
       console.log("Error in getCart thunk", error)
   }
})

export const editCartAsync = createAsyncThunk("editCart", async (cart) => {
      
    const { data } = await axios.put(`/api/cart/${cart.cartId}`, cart);
    console.log("DATA IN editCArt Thunk, ", data)
    return data;
  });

 
const initialState =[]
const cart = createSlice({
   name: "cart",
   initialState,
   reducers: {
 
   },
   extraReducers: (builder)=>{
       builder.addCase(getCart.fulfilled, (state, action)=>{
           return action.payload
       })
   }
})
 
 
export const selectCart = (state)=>{
   console.log("HELLE")
   return state.cart
}
 
 
export default cart.reducer
