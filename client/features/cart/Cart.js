import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { getCart,selectCart } from './cartSlice'

import { selectProducts } from '../allproducts/productsSlice';
import { fetchProductsAsync } from '../allproducts/productsSlice';



import { selectMe } from '../auth/authSlice';





const Cart = (props) => {


console.log("PROPS IN CART COMPONENT: ", props.userId)
let cartId = props.userId
console.log("CARTID: ",typeof cartId)

 
const products = useSelector(selectProducts);

const me = useSelector(selectMe)
console.log("MEMEMEME: ", me.id)
const dispatch = useDispatch()


useEffect(() => {
  dispatch(fetchProductsAsync())
}, [dispatch] );
 
 
 return (
  <div id="allProducts">

  <div>
    <h1>Your products</h1>
      <ul className="media-list">
        {products && products.length ? products.filter((product) => product.cartId === parseInt(cartId))
          .map((product) => (
            <Link to={`/products/${product.id}`}>
              <img src={product.imageUrl} />
              <p>{product.name}</p>
              <p>${product.price}</p>
            </Link>
          )): ""}
      </ul>
      

    </div>

</div>
 )
}
 
export default Cart