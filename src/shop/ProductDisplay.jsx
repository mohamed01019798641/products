/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {  Link } from 'react-router-dom';
const desc='Energistia an deliver atactica metrcs after avsionaery'
const ProductDisplay = ({item}) => {
    
    const {name,id,price,seller,ratingsCount,quantity,img}=item;
    const [prequantity,setquanity] = useState(quantity);
    const [coupon,setcoupon]=useState('');
    const [size,setsize]=useState('Select Size');
    const [color,setcolor]=useState('Select color');
    const handleSizeChaange =(e)=>{
        setsize(e.target.value);
    };
    const handlColor =(e)=>{
        setcolor(e.target.value);
    }
    const handleDecrease=()=>{
       if(prequantity > 1){
        setquanity(prequantity-1)
       }
    }
    const handleIncrease=()=>{
        
          setquanity(prequantity +1)
           
    };
    const handleSubmit=(e)=>{
      e.preventDefault();
      const product ={
        id:id,
        img:img,
        name:name,
        price:price,
        quantity:prequantity,
        size:size,
        color:color,
        coupon:coupon
      }
      
     
      const existingCard=JSON.parse(localStorage.getItem('card')) || [];
      const existingProductIndex = existingCard.findIndex((item)=> item.id === id);
      if(existingProductIndex !== -1){
        existingCard[existingProductIndex].quantity += prequantity;
      }else{
        existingCard.push(product);
      }

      // update local storage
      localStorage.setItem('card', JSON.stringify(existingCard))
      //reset from fields
      setquanity(1);
      setsize('Select Size');
      setcolor('Select Color');
      setcoupon('');
    }


    
  return (
    <div>
      <div >
        <h1>{name}</h1>
        <p className='rating'>
            <i className='icofont-star text-warning'></i>
            <i className='icofont-star text-warning'></i>
            <i className='icofont-star text-warning'></i>
            <i className='icofont-star text-warning'></i>
            <i className='icofont-star text-warning'></i>
            <span>{ratingsCount} review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* cart componts */}
       <div>
          <form  onSubmit={handleSubmit}>
            {/* size */}
            <div className='select-product size'>
                <select value={size} onChange={handleSizeChaange}>
                    <option >Select Size</option>
                    <option>SM</option>
                    <option>MD</option>
                    <option>LG</option>
                    <option>XL</option>
                    <option >XXL</option>
                </select>
                

            </div>
            {/* color */}
            <div className='select-product color'>
                <select value={color} onChange={handlColor}>
                    <option >Select Color</option>
                    <option>Pink</option>
                    <option>Ash</option>
                    <option>Red</option>
                    <option>White</option>
                    <option >Blue</option>
                </select>
            </div>
             
             {/* cart plus minus */}  
             <div className='cart-plus-minus'>
                <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                    
                <input onChange={(e)=>setquanity(parseInt(e.target.value,10))} className='cart-plus-minus-box' id='qtybutton' type="text" name='qtybutton' value={prequantity} />
                <div className='inc qtybutton' onClick={handleIncrease}>+ </div>
                  
            
             </div>

             {/* coupon field */}
             <div className='discount-cod md-2'>
                <input type="text" placeholder='Enter Discount Code' onChange={(e)=>setcoupon(e.target.value)}/>
             </div>
              {/* btn section */}
              
               <button type='submit' className='lab-btn'>
                <span> Add To Card</span>
               </button>
              
                 <Link to='/cart-page' className='lab-btn bg-primary '>
                    <span>Check Out</span>
                 </Link>
             
             
               
             
          </form>
       </div>
    </div>
  )
}

export default ProductDisplay
