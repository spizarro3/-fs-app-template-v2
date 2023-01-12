import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSingleProduct,
  fetchSingleProduct,
} from "../singleProduct/singleProductSlice.js";
// import { EditProduct } from "../features/editProduct";

// TODO IMPLEMENT isADMIN VARIABLE

const SingleProduct = () => {
  const { id } = useParams();

  const singleProduct = useSelector(selectSingleProduct);
  console.log(singleProduct)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));

  }, [dispatch]);

  if (!singleProduct) {
    return <p>loading</p>
  }

  const { name, price, description, imageUrl, quantity } =
    singleProduct.singleProduct;

  // handleClick()
  // =
  return (
    <div id="single-product">
      <div id="single-product-detail">
        <div>
          <h3>{name}</h3>
          <p>{price}</p>
          <p>{description}</p>
          <p>{quantity}</p>
        </div>
        <img src={`${imageUrl}`} />
      </div>
      <div>
        <Link to={`/products/${id}`}>
          <h5>Product</h5>
        </Link>
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

export default SingleProduct;
