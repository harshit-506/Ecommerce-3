import React from 'react'
import Products from "../../Products/Products";

function RelatedProducts() {
  return (
    <div className='related-products'>
      {/* this will replaced by related products in heading section */}
     <Products headingText="Related Products"/>
    </div>
  )
}

export default RelatedProducts
