import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import productsReducer from '../features/allproducts/productsSlice'
import product from "../features/singleProduct/singleProductSlice"
import usersReducer from '../features/usersadmin/usersSlice'

const store = configureStore({
  reducer: { auth: authReducer,
             products: productsReducer,
             singleProduct: product,
             users: usersReducer,},

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});



export default store;
export * from '../features/auth/authSlice';
