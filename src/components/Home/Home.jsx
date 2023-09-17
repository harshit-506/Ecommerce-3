import React, { useContext, useEffect } from 'react'

import "./Home.scss"
import Banner from "./Banner/Banner";
import Category from './Category/Category';
import Products from '../Products/Products';
import { fetchDataFromApi } from '../../utils/api';
import { Context } from '../../utils/context';

function Home() {
  // You can easily access here categories as you pass in value of Context provider
  const {categories,setCategories,products,setProducts} = useContext(Context); //using from COntext.js

  useEffect(()=>{
    getProducts();
   getCategories();
  },[]) //remember to add dependency

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*")
      .then((res) => {
        // Handle the response data here
        console.log(res);
        setProducts(res); //this res goes into context
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  };















    //write this way to get api other wise get error

    // for image access from api use following after categories
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*")
      .then((res) => {
        // Handle the response data here
        console.log(res);
        setCategories(res); //this res goes into context
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  };
  


  return (
    <div>
    <Banner/>
    <div className='main-content'>
      <div className='layout'>
        {/* api called in categories section */}
        {/* now categories pass in category.jsx */}
      <Category categories={categories}/> 
      <Products products={products} headingText="Popular Products"/>
      </div>
    </div>
    
    </div>
  )
}

export default Home
