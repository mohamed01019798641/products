/* eslint-disable react/prop-types */
import Data from '../products.json'

import React from 'react'

const ShopCategory = ({filterItem,setItem,menuItem,setproduct,selectecatogry}) => {
  return (
    <div>
      <div className='widget-header'>
        <h5 className='ms-2'>All Categories</h5>

      </div>
      <div>
        <button onClick={()=>setproduct(Data)}className={`m-2 ${selectecatogry === 'All' ? 'bg-warning':''}`}>All</button>
        {
            menuItem.map((val,id)=>{
                return(
                   <button onClick={()=>filterItem(val)} key={id} className={`m-2 ${selectecatogry === val ? 'bg-warning':''}`}>{val}</button>
                )
            })
        }
      </div>
    </div>
  )
}

export default ShopCategory
