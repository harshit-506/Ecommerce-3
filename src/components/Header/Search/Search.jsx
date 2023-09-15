import React from 'react'
import "./Search.scss";
import {MdClose} from "react-icons/md";
import prod from "../../../assets/product/earbuds5.webp"

function Search({setShowSearch}) {
  return (
    <div className='search-modal'>
        <div className="form-field">
            <input type="text"
            autoFocus //focusing in input field
            placeholder='Search products' />
            <MdClose onClick={()=>setShowSearch(false)}/>
            </div> 
            {/* adding search results section */}
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prod} alt="" />
                        </div>
                        <div className="prod-details">
                {/* this would change dynamically as we select products */}
                <span className='name'>product name</span>
                <span className='desc'>product desc</span>
              
               
            </div>
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default Search
