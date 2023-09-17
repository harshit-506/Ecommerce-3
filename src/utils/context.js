import React, { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext();

const AppContext =({children})=>{
  const [categories,setCategories] =useState();
  const [products,setProducts] = useState();
  //context accepts value

  //this all available for all globally
  return <Context.Provider value={{
    categories,
    setCategories,
    products,
    setProducts,
  }}>{children}</Context.Provider>
}

export default AppContext
