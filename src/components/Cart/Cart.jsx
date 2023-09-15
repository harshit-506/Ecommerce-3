import React from "react";
import {MdClose} from "react-icons/md"
import {BsCartX} from "react-icons/bs"
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";

// It is imported in header section because cart item is in header
function Cart({setShowCart}) {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
        <div className="cart-content">
          <div className="cart-header">
            <span className="heading">Shopping Cart</span>
            {/* this would change setShowCart to false thats why it's dissapear */}
            <span className="close-btn" onClick={()=>setShowCart(false)}>
              <MdClose/>
              <span className="text">close</span>
            </span>
          </div>
          {/* <div className="empty-cart">
            <BsCartX/>
            <span>No products in the cart.</span>
            <button className="return-cta">RETURN TO SHOP</button>
          </div> */}
           {/* this will run conditionally beacuse it will run when cart is empty */}
           {/* here we will import cart item beacuse when we select product it will appear-2 */}
           <>
           {/* adding calculation area */}
           <CartItem/> 
           <div className="cart-footer">
            <div className="subtotal">
              <span className="text">subtotal:</span>
              <span className="text total">&#8377;1234</span>
            </div>
            <div className="button">
              <button className="checkout-cta">Checkout</button>
            </div>
           </div>
           </>
        </div>
      
    </div>
  )
}

export default Cart
