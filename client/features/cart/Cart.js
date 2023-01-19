


import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { getCartAsync, selectCart, removeFromCartAsync } from './cartSlice'

import { selectProducts } from '../allproducts/productsSlice';
import { fetchProductsAsync } from '../allproducts/productsSlice';

import { selectMe } from '../auth/authSlice';


const Cart = () => {
  const me = useSelector(selectMe)
  const meId = me.id
  const dispatch = useDispatch()

  const cart = useSelector(selectCart)
  const products = cart.products

  let totalMap;
  if(products && products.length){
  totalMap = products.map((product)=>{
    return product.price
  })
  }else{
    totalMap = []
  }
  let total = 0
  if(totalMap[0]){
  total = totalMap.reduce((a,b)=> a + b)
  }
  

  //  COULD USE COUNT MAGIC METHOD
  const getNumber = (productId)=>{
    const idArray = products.filter((product) => {
      return Number(product.id) === productId
    })
      return idArray.length
  }

  useEffect(() => {
    dispatch(getCartAsync(me.id))
  }, [dispatch] );
  
  const handleRemoveFromCart = (productId)=>{
    dispatch(removeFromCartAsync({productId, meId})).then(()=>{
      dispatch(getCartAsync(me.id))
    })
  }
 
 return (
  <div id="allProducts">
  <div className='p-6'>
    <h1 className='text-5xl'>TOTAL: {total}</h1>
    <h1>Your products</h1>
      <ul className="media-list">
        {products && products.length ? 
          products.map((product) => (
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Link to={`/products/${product.id}`}>
              <img src={product.imageUrl}
              className="h-full w-full object-cover object-center group-hover:opacity-75" />
              <p>{product.name}</p>
              <p>${product.price}</p>
            </Link>
            <p>Quantity: {getNumber(product.id)}</p>
            <button onClick={()=> handleRemoveFromCart(product.id)}>Delete From Cart</button>
            </div>
          )): ""}
      </ul>
    <button>Checkout</button>
    </div>
</div>
 )
}
 
export default Cart

