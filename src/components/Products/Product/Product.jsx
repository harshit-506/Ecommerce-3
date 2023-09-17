import React from 'react'
import "./Product.scss";
import prod from "../../../assets/earbuds2.webp"
function Product({id,data}) {
  return (
   <div className='product-card'>
    <div className='thumbnail'>
      {/* //here we are using api url */}
      <img src={process.env.REACT_APP_DEV_URL + data.img.data[1].attributes.url} alt="" />
      </div>

      <div className='product-details'>
        <span className='name'>Product name</span>
        <span className='price'>&#8377;499</span>
      </div>
    </div>
   
  )
}

export default Product
