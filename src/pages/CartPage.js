import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'
const CartPage = () => {
  const products=useSelector((state)=>state.cart)
  const dispatch=useDispatch();
  const handleRemove=(id)=>{
    dispatch(remove(id))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
          products.map((product)=>(
            <div className='cartCard' key={product.id}>
              <img src={product.image} alt=''></img>
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button onClick={()=>handleRemove(product.id)} className='btn'>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CartPage