import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct, editSingleProduct } from "./singleProductSlice";

const EditProduct = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");



  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(id)).then((res) => {
      const { imageUrl, name, price, description, quantity } = res.payload;

      setImageUrl(imageUrl);
      setName(name);
      setPrice(price);
      setDescription(description);
      setQuantity(quantity);
    });
  }, [dispatch]);

  const handleEditProduct = (e) => {
    e.preventDefault();
    dispatch(
      editSingleProduct({ id, name, price, description, imageUrl, quantity })
    ).then(() => {
      dispatch(fetchSingleProduct(id));
    });
  };

  return (
    <div id="editProduct">
      <h1>Edit Product</h1>
      <form onSubmit={handleEditProduct}>
        <label htmlFor="imageUrl">Image Url:</label>
        <input
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="price">Price:</label>
        <input
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <input
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="quantity">Quantity:</label>
        <input
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Edit</button>
        {/* <button onClick={() => setEdit(!edit)} type="submit">Edit Product</button> */}
      </form>
    </div>
  );
};

export default EditProduct;
