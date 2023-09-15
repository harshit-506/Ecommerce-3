import React from 'react'
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPintrest,
  FaCartPlus,
} from "react-icons/fa";
import prod3 from "../../assets/product/headphone3.webp"
import "./SingleProduct.scss";
function SingleProduct() {
  return (
    <div className='single-prduct-main-content'>
      <div className='layout'>
        <div className="single-product-page">
          <div className="left">
            <img src={prod3} alt="" />
          </div>
          <div className="right">
            <span className='name'>Product name</span>
            <span className='price'>price</span>
            <span className='desc'>description</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className='add-to-cart-button'>
                <FaCartPlus size={20}/>
                Add To Cart
              </button>
            </div>
            <span className="divider"/>
            <div className="info-item">
              <span className='text-bold'>Category:
              <span>Headphones</span>
              </span>
              <span className='text-bold'>share:
              <span className='social-icons'>
                <FaTwitter size={15}/>
                <FaFacebookF size={15}/>
                <FaLinkedinIn size={15}/>
                <FaInstagram size={15}/>
               
              </span>
              </span>
             
            </div>
          </div>
        </div>
        <RelatedProducts/>
      </div>
    </div>
  )
}

export default SingleProduct
