import React from 'react'
import "./Products.scss"
import Product from './Product/Product'
//importing here product dont feel discomfort
function Products({products,innerPage,headingText}) {
  //This prop used in category section only

  // here all work done by api's just remember the process
  return (
    <div>
      <div className="products-container">
        {!innerPage &&<div className='sec-heading'>{headingText}</div>} {/*//this could be change dynamically */}
        <div className='products'>
         {products.data.map((item)=>(
          // id need for product data used in product.jsx
            <Product key={item.id} id={item.id} data={item.attributes}/>
         ))}
         
          
        </div>
      </div>
    </div>
  )
}

export default Products
