import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { fetchProducts } from '../store/ProductSlice'
import { STATUSES } from '../store/ProductSlice'

const Products = () => {
  
  const dispatch=useDispatch()
  const {data: Products, status}= useSelector((state)=>state.product)
  useEffect(() => {
    dispatch(fetchProducts())
  },[])
  const HandleAdd=(product)=>{
    dispatch(add(product))
  }
  if(status===STATUSES.LOADING){
    return <h2>Loading...</h2>
  }
  if (status===STATUSES.ERROR){
    return <h2>Error...NOT FOUND</h2>
  }
  return (
    <div className='productsWrapper'>
      {
        Products.map((product)=>(
          <div className='card' key={product.id}>
            <img src={product.image} alt=''/>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={()=>{HandleAdd(product)}} className='btn'>Add to cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Products