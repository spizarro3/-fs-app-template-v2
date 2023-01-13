import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSingleProduct,
  fetchSingleProduct,
} from "../singleProduct/singleProductSlice.js";
import EditProduct from "../singleProduct/EditProduct";



const SingleProductAdmin = () => {
  const { id } = useParams();

  const singleProduct = useSelector(selectSingleProduct);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch]);

  const { name, price, description, imageUrl, quantity } = singleProduct.singleProduct;

  return (
    <div id="singleProduct">
      <EditProduct />
      <div id="singleProductInfo">
        <img src={imageUrl} />
        <h1>{name}</h1>
        <h2>${price}</h2>
        <p>{description}</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default SingleProductAdmin;
