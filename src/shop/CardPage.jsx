import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom';
import delimgurl from '../assets/images/shop/del.png'
import CheckOutPage from './CheckOutPage';

const CardPage = () => {
  const [cartitem,setcartitem]=useState([]);
  useEffect(()=>{
    // fetch cart item frim local storage
    const storedcartItem= JSON.parse(localStorage.getItem('card')) || [];
     setcartitem(storedcartItem)
  },[]);

  // calulate prices
  const calculateTotalprice=(item)=>{
    return item.price * item.quantity;

  }

  // handle quantity increase
  const handleincrease = (item)=>{
    item.quantity += 1;
    setcartitem([...cartitem]);

    // update local storage with new cart item
    localStorage.setItem('card',JSON.stringify(cartitem));

  }
 // handle quantity decrease
 const handleDecreasr=(item)=>{
  if(item.quantity > 1){
    item.quantity -= 1;
    setcartitem([...cartitem]);

     // update local storage with new cart item
     localStorage.setItem('card',JSON.stringify(cartitem));
  }
 };

 // handle item remove
 const handleremove=(item)=>{
  const updatedcart=cartitem.filter((cartitem) => cartitem.id !== item.id);
  //update new cart
  setcartitem(updatedcart);
  updteLocalstorage(updatedcart)
  
 }
 const updteLocalstorage=(card)=> {
  localStorage.setItem('card',JSON.stringify(card))

 }

 // cart subtotal
 const subtotal=cartitem.reduce((total,item)=>{
  return total + calculateTotalprice(item)
 },0)

 // let subtotal =function(){
 //   cartitem.reduce((total,item)=>{
 //     return   total + calculateTotalprice(item)
 //   },0)

 // }

  const ordertotal=subtotal;
   
  return (
    <div>

      
      <PageHeader title={'Shop Cart'} curPage={'Cart page'}/>
      <div className='shop-cart padding-tb'>
        <div className='container'>
          <div className='section-wrapper '>
            {/* cart top */}
            <div className='cart-top '>
              <table>
                <thead>
                  <tr>
                    <th className='cat-product'>Product</th>
                    <th className='cat-price'>Price</th>
                    <th className='cat-quantity'>Quantity</th>
                    <th className='cat-toprice'>total</th>
                    <th className='cat-edit'>Edit</th>
                  </tr>
                </thead>
                 {/* table bode */}
                 <tbody>
                   {
                    
                  
                      cartitem.map((item,index)=>(
                        <tr key={index}>
                          <td className='product-item cat-product'>
                           <div className='p-thumb'>
                               <Link to='/shop'><img src={item.img} alt="" /></Link>
                              
                            </div> 

                             <div className='p-content'>
                              <Link to='/shop'>{item.name}</Link>
                             </div>
    
                          </td>
                           <td className='cat-price'>
                             ${item.price}

                           </td>
                          <td className='cat-quantity'>
                            <div className='cart-plus-minus'>
                              <div className='dec qtybutton' onClick={()=> handleDecreasr(item)}>
                                -
                              </div>
                              <input type="text" className='cart-plus-minus-box' name='qtybutton'
                                value={item.quantity}
                              />
                              <div className='inc qtybutton' onClick={()=> handleincrease(item)}>
                                +
                              </div>

                            </div>

                          </td>
                          <td className='cat-toprice'>
                            ${calculateTotalprice(item)}
                          </td>
                          <td className='cat-edit'>
                            <a href="#" onClick={()=> handleremove(item)}>
                              <img src={delimgurl} alt="" />
                            </a>

                          </td>

                           
                        </tr>
                      ))
                       
                     
                   }
                 </tbody>
              </table>

            </div>
            {/* cart top  ends */}
            <div className="cart-bottom">
              {/* checkout box */}
              <div className='cart-checkout-box'>
                <form className='coupon'>
                  <input type="text" className='cart-page-input-text' name='coupon' id='coupon' placeholder='coupon code..' />
                  <input type='submit' value='Apply coupon' />
                </form>
                <form className='cart-checkout' >
                  <input type="submit" value='update cart'/>
                  <div>
                    <CheckOutPage/>
                  </div>
                </form>
              </div>
              {/* checkout box end */}
              {/* shoping box */}
              <div className='shoping-box d-flex justify-content-between gap-20'>
                <div className='row  '>
                  <div className='col-md-6 col-12'>
                    <div className="calculate-shoping">
                      <h3>Calculate Shoping</h3>
                      <div className="autline-select">
                        <select>
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="egypt">Egypt</option>
                          <option value="itali">Itali</option>
                          <option value="indiea">indiea</option>
                          <option value="np">Napal</option>
                        </select>
                       
                      </div>
                      <div className='outline-select shipping-select'>
                      <select>
                          <option value="uk">New work</option>
                          <option value="egypt">Cairo</option>
                          <option value="itali">rama</option>
                          <option value="indiea">New Delhi</option>
                         
                        </select>
                      </div>
                      <input className='cart-page-input-text' placeholder='postacoda/Zip *' type="text" name='postacoda'  id='postalcode'/>
                      <button className='lab-btn text-light' type='submit'>Update Adress</button>
                    </div>
                  </div>

                  <div className='col-md-6 col-12 ml-20 mr-10' >
                    <div className='cart-overview '>
                      <h3>Cart total</h3>
                      <ul className='lab-ul'>
                        <li>
                          <h5 className='pull-left'>Cart Subtotal</h5>
                          <h7 className='pull-right'>${ subtotal}
                          </h7>
                        </li>

                        <li> 
                          <h6 className='pull-left'>Shipping and handling</h6>
                          <h8 className='pull-right'>Free Shipping
                          </h8>
                        </li>
                        <li> 
                          <h6 className='pull-left'>Order Total</h6>
                          <h4 className='pull-right'>${ordertotal.toFixed(2)}
                          </h4>
                        </li>

                      </ul>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
       
 
 
   
 
    </div>
  )
}

export default CardPage
