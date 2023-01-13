import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import AllProducts from "../features/allproducts/AllProducts";
import { me } from "./store";
import AllProductsAdmin from "../features/allproducts/AllProductsAdmin";
import SingleProduct from "../features/singleProduct/SingleProduct";
import SingleProductAdmin from "../features/singleProduct/SingleProductAdmin";
import AllUsersAdmin from '../features/usersadmin/AllUsers';
import SingleUser from '../features/usersadmin/SingleUser';
import Cart from '../features/cart/Cart';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />

          <Route to="/home" element={<Home />} />

          <Route
          path="/users/:id"
          element={<SingleUser />} />
 <Route
          path="/cart"
          element={<Cart />} />

        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />

          <Route
          path="/products"
          element={<AllProducts />} />

          <Route
          path="/admin/products"
          element={<AllProductsAdmin />} />
          
          <Route path="/products/:id" element={<SingleProduct />} />
          
         <Route path="/admin/products/:id" element={<SingleProductAdmin />} />
           
           

          <Route
          path="/admin/users"
          element={<AllUsersAdmin />} />

          <Route
          path="/users/:id"
          element={<SingleUser />} />

        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
