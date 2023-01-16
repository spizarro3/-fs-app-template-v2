// import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import axios from "axios";
 
// // const token = window.localStorage.getItem(TOKEN)

// export const getCart = createAsyncThunk("getCart/", async(userId)=>{
//    console.log("HELLO From get cart thunk", userId)
//    try{
//        const {data} = await axios.get(`/api/cart/${userId}`)
//        return data
//    }catch(error){
//        console.log("Error in getCart thunk", error)
//    }
// })

// export const editCartAsync = createAsyncThunk("editCart", async (cart) => {
      
//     const { data } = await axios.put(`/api/cart/${cart.cartId}`, cart);
//     console.log("DATA IN editCArt Thunk, ", data)
//     return data;
//   });

 
// const initialState =[]
// const cart = createSlice({
//    name: "cart",
//    initialState,
//    reducers: {
 
//    },
//    extraReducers: (builder)=>{
//        builder.addCase(getCart.fulfilled, (state, action)=>{
//            return action.payload
//        })
//    }
// })
 
 
// export const selectCart = (state)=>{
//    console.log("HELLE")
//    return state.cart
// }
 
 
// export default cart.reducer


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

export const getCart2 = createAsyncThunk("getCart2/", async(userId)=>{
    console.log("HELLO From get cart2 thunk", userId)
    try{
        const {data} = await axios.get(`/api/cart/${userId}/cart`)
        return data
    }catch(error){
        console.log("Error in getCart2 thunk", error)
    }
 })

export const editCartAsync = createAsyncThunk("editCart", async (cart) => {
      
    const { data } = await axios.put(`/api/cart/${cart.cartId}`, cart);
    console.log("DATA IN editCArt Thunk, ", data)
    return data;
  });

  export const removeFromCart = createAsyncThunk("removeFromCart", async (info) => {
      console.log("HI FROM REMOVE CART THUNJK")
      console.log("INFO IN remove from cart thunk", info)
    try{
         console.log("INFO IN remove from cart thunk", info)
        // console.log("CartID IN remove from cart thunk", cartId)
         const { data } = await axios.put(`/api/cart/remove/${info.meId}`, info);
         return data;
      }catch(error){
        console.log("ERROR in REMOVE FFROM CART THUNK")
        
      }
    // const { data } = await axios.put(`/api/cart/${cart.cartId}`, cart);
    // console.log("DATA IN editCArt Thunk, ", data)
    // return data;
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
       }),
       builder.addCase(getCart2.fulfilled, (state, action)=>{
        return action.payload
    })
    builder.addCase(removeFromCart.fulfilled, (state, action)=>{
        return action.payload
    })
   }
})
 
 
export const selectCart = (state)=>{
   console.log("HELLE")
   return state.cart
}
 
 
export default cart.reducer