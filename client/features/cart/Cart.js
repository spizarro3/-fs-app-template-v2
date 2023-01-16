// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from "react-redux";
// import { Link, useParams } from "react-router-dom"
// import { getCart,selectCart } from './cartSlice'

// import { selectProducts } from '../allproducts/productsSlice';
// import { fetchProductsAsync } from '../allproducts/productsSlice';



// import { selectMe } from '../auth/authSlice';





// const Cart = (props) => {


// console.log("PROPS IN CART COMPONENT: ", props.userId)
// let cartId = props.userId
// console.log("CARTID: ",typeof cartId)

 
// const products = useSelector(selectProducts);

// const me = useSelector(selectMe)
// console.log("MEMEMEME: ", me.id)
// const dispatch = useDispatch()


// useEffect(() => {
//   dispatch(fetchProductsAsync())
// }, [dispatch] );
 
 
//  return (
//   <div id="allProducts">

//   <div>
//     <h1>Your products</h1>
//       <ul className="media-list">
//         {products && products.length ? products.filter((product) => product.cartId === parseInt(cartId))
//           .map((product) => (
//             <Link to={`/products/${product.id}`}>
//               <img src={product.imageUrl} />
//               <p>{product.name}</p>
//               <p>${product.price}</p>
//             </Link>
//           )): ""}
//       </ul>
//     </div>
// </div>
//  )
// }
 
// export default Cart



import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { getCart, getCart2, selectCart, removeFromCart } from './cartSlice'

import { selectProducts } from '../allproducts/productsSlice';
import { fetchProductsAsync } from '../allproducts/productsSlice';



import { selectMe } from '../auth/authSlice';





const Cart = () => {



 
// const products = useSelector(selectProducts);

const me = useSelector(selectMe)
const meId = me.id
const dispatch = useDispatch()

const cart = useSelector(selectCart)
 const products = cart.products
 console.log("PRODECTS: ", products)
let totalMap;
 if(products && products.length){
 totalMap = products.map((product)=>{
 return  product.price
})
 }else{
  totalMap = []
 }
 let total = 0
 if(totalMap[0]){
 total = totalMap.reduce((a,b)=> a + b)
 }
 
const getNumber = (productId)=>{
  const idArray = products.filter((product)=>{
   return Number(product.id) === productId
  })
  console.log("idarray ", idArray)
  
  return idArray.length
}

useEffect(() => {
  dispatch(getCart2(me.id))
}, [dispatch] );
 

const handleRemoveFromCart = (productId)=>{
  dispatch(removeFromCart({productId, meId})).then(()=>{
    dispatch(getCart2(me.id))
  })
}
 
 return (
  <div id="allProducts">

  <div>
    <h1>Your products</h1>
    <h1>TOTAL: {total}</h1>
      <ul className="media-list">
        {products && products.length ? 
          products.map((product) => (
            <div>
            <Link to={`/products/${product.id}`}>
              <img src={product.imageUrl} />
              <p>{product.name}</p>
              <p>${product.price}</p>
            </Link>
            <p>Quantity: {getNumber(product.id)}</p>
            <button onClick={()=> handleRemoveFromCart(product.id)}>Delete From Cart</button>
            </div>
          )): ""}
      </ul>
    </div>
    <button>Checkout</button>
</div>
 )
}
 
export default Cart

