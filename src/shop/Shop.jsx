import React, { useState } from 'react'
import PageHeader from '../components/PageHeader';
import Data from '../products.json'
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags';

const showResult ='showing 01 - 12 of 139 Results';


const Shop = () => {
  const [GridList,setGridList]=useState(true)
  const [product,setproduct]=useState(Data)

  // pagination 
   const [currentpage,setcurrentpage]=useState(1);
   const productsPerpage= 12;

   const indexOfLastProduct =currentpage * productsPerpage;
   const indexOfFirestProduct=indexOfLastProduct - productsPerpage;
   const currentProducts=product.slice(indexOfFirestProduct,indexOfLastProduct);

   // funtion to change the current page
   const paginate= (pageNumber)=>{
    setcurrentpage(pageNumber);
   };
   // filter product based on catogry
   const [catogry,setcatogry]=useState('All');
   const menuItem=[...new Set(Data.map((val)=>val.category))];
   const filterItem=(curcat)=>{
    const newItem=Data.filter((newVal)=>{
      return newVal.category===curcat;

    })
    setcatogry(curcat);
    setproduct(newItem);
   }
  
  return (
    <div>
      <PageHeader title='Our Shop Page' curPage="shop"/>
      {/* shop page */}
      <div className='shop-page padding-tb'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-10'>
              <article>
                {/* layout and title here */}
                < div className='shop-title d-flex flex-warp justify-content-between'>
                   <p>{showResult}</p>
                   <div className={`product-view-mode ${GridList ? 'gridActive':'listActive'}`}>
                    <a  className='grid' onClick={()=>setGridList(!GridList)}>
                      <i className='icofont-ghost'></i>
                    </a>
                    <a  className='list' onClick={()=>setGridList(!GridList)}>
                      <i className='icofont-listine-dots'></i>
                    </a>

                   </div>
                </div>
                {/* product cards */}
                <div>
                 <ProductCards GridList={GridList} product={currentProducts}/>
                </div>

                <Pagination productsPerpage={productsPerpage}
                  totalProducts ={product.length}
                  paginate={paginate}
                  activePage={currentpage}
                
                />
 
              </article>
             
            </div>
           
            <div className='col-lg-4 col-12'>
              <ShopCategory filterItem={filterItem} setItem={setproduct} menuItem={menuItem}
               setproduct={setproduct}
               selectecatogry={catogry}
              />
              <PopularPost/>
              <Tags/>

            </div>
            
          </div>

        </div>
       
      

      </div>
    </div>
  )
}

export default Shop
