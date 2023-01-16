import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSingleProduct,
  fetchSingleProduct,
} from "../singleProduct/singleProductSlice.js";
import { EditProduct } from "../singleProduct/EditProduct";

import { editCartAsync } from "../cart/cartSlice.js";

import { selectMe } from '../auth/authSlice';
// TODO IMPLEMENT isADMIN VARIABLE

const SingleProduct = () => {
  const { id } = useParams();
  
  const singleProduct = useSelector(selectSingleProduct);
  const me = useSelector(selectMe)
  console.log(" ME.if type: ",typeof me.id)

  const cartId = me.id
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch]);

  const { name, price, description, imageUrl, quantity } =
    singleProduct.singleProduct;

  const handleAddToCart = () => {
    // dispatch(addToCart(id));
    
    dispatch(editCartAsync({cartId, id}))
    console.log("ID",id)
  };
    
  return (
    <div id="singleProduct">
      <div id="singleProductInfo">
        <img src={imageUrl} />
        <h1>{name}</h1>
        <h2>${price}</h2>
        <p>{description}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <button onClick={() => handleAddToCart()}>Add to cart</button>
    </div>
  );
};

{
  /* isAdmin ?         <EditProduct />
        : null      </div>
    </div>
  );
}; */
}

export default SingleProduct;
