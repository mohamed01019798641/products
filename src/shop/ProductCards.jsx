/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import Ratting from '../components/Ratting'

const ProductCards = ({GridList,product}) => {
    
  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? 'grid':'list'}`}>
      {
        product.map((prodauc,i)=>(
          <div key={i} className='col-lg-4 col-md-6 col-12'>
            <div className='product-item'>
              {/* product images */}
              <div className='product-thumb'>
                <div className='pro-thumb'>
                <img src={prodauc.img} alt="" />
                </div>

                {/* product action link */}
                <div className='product-action-link'>
                  <Link to={`/shop/${prodauc.id}`}><i className='icofont-eye'></i></Link>
                  <a href="#">
                    <i className='icofont-heart'></i>
                  </a>
                  <Link to='/cart-page'><i className='icofont-cart-alt'></i></Link>

                </div>

              </div>

              {/* product content */}
              <div className='product-content'>
                <h5>
                  <Link to={`/shop/${prodauc.id}`}>{prodauc.name}</Link>
                </h5>
                <p className='productRating'>
                <Ratting/>
                </p>
                <h6>{`$${prodauc.price}`}</h6>

              </div>


            </div>
            {/* list style */}
            <div className='product-list-item'>
              {/* product images */}
              <div className='product-thumb'>
                <div className='pro-thumb'>
                <img src={prodauc.img} alt="" />
                </div>

                {/* product action link */}
                <div className='product-action-link'>
                  <Link to={`/Chop/${prodauc.id}`}><i className='icofont-eye'></i></Link>
                  <a href="#">
                    <i className='icofont-heart'></i>
                  </a>
                  <Link to='/Cart-page'><i className='icofont-cart-alt'></i></Link>

                </div>

              </div>

              {/* product content */}
              <div className='product-content'>
                <h5>
                  <Link to={`/Shop/${prodauc.id}`}>{prodauc.name}</Link>
                </h5>
                <p className='productRating'>
                <Ratting/>
                </p>
                <h6>{`$${prodauc.price}`}</h6>

              </div>


            </div>
           


          </div>
        ))
      }
      
    </div>
  )
}

export default ProductCards
