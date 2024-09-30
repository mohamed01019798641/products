import React, { useState } from 'react';
import ProdactData from '../products.json'
import { Link } from 'react-router-dom';
import Selected from '../components/Selected';
const title =( 
  <h2>Search Your One from  <span>Thousand</span> Of Products</h2>
)
const desc ='We have the largest collection of Products';

const bannerList = [
  {
  iconName: "icofont-users-alt-4",
  text: "1.5 Million Customers",
  },
  {
  iconName: "icofont-notification",
  text: "More then 2000 Marchent",
  },
  {
  iconName: "icofont-globe",
  text: "Buy Anything Online",
  },
  ];

const Baner = () => {
  const [saerchInpout,setsaerchInpout]=useState('');
  const [filterprodact,setfilterprodact]=useState(ProdactData);




   const handelsearch= e =>{
    const searchTerm =e.target.value;
    setsaerchInpout(searchTerm);

     const filtered =ProdactData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
     setfilterprodact(filtered);
   }
  return (
    <div className='banner-section style-4'>
      <div className='container'>
        <div className='banner-content'>
          {title}
          <form >
            <Selected select={'all'}/>
            <input type="text" name='saerch' id='saerch' placeholder='Saerch your Products' value={saerchInpout}
            onChange={handelsearch} />
            <button type='submit'><i className="icofont-search-1"></i></button>
          </form>
          <p>{desc}</p>
          <ul className='lab-ul'>
            {
              saerchInpout && filterprodact.map((product,i)=> <li key={i}>
                <Link to={`/Shop/${product.id}`}>{product.name}</Link>
                </li>)
            }

          </ul>

        </div>

      </div>
      
    </div>
  )
}

export default Baner
