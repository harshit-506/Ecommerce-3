import React, { useEffect } from 'react'

import "./Home.scss"
import Banner from "./Banner/Banner";
import Category from './Category/Category';
import Products from '../Products/Products';
import { fetchDataFromApi } from '../../utils/api';
function Home() {

  useEffect(()=>{
   getCategories();
  })
    
  const getCategories = () => {
    fetchDataFromApi("/api/categories")
      .then((res) => {
        // Handle the response data here
        console.log(res);
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
      <Category/>
      <Products headingText="Popular Products"/>
      </div>
    </div>
    
    </div>
  )
}

export default Home
