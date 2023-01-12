import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSingleProduct,
  fetchSingleProduct,
} from "../singleProduct/singleProductSlice.js";
import { EditProduct } from "../singleProduct/EditProduct";

// TODO IMPLEMENT isADMIN VARIABLE

const SingleProductAdmin = () => {
  const { id } = useParams();

  const singleProduct = useSelector(selectSingleProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch]);

  const { name, price, description, imageUrl, quantity } =
    singleProduct.singleProduct;

  return (
    <div id="singleProduct">
      <div id="singleProductInfo">
      <EditProduct />
        <img src={imageUrl} />
        <h1>{name}</h1>
        <h2>${price}</h2>
        <p>{description}</p>
        <p>Quantity: {quantity}</p>
      </div>
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

export default SingleProductAdmin;
