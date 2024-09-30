import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import '../components/Modal.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckOutPage = () => {
    const [show,setshow]=useState(false)
    const [activtab,setActivabtab]=useState('Visa')

    //handle tab change
    const handletabchinge=(tabId)=>{
        setActivabtab(tabId)

    }
    const handlShow=()=>setshow(true)
    const handleClose=()=>setshow(false)

     // direct to home page
     const location=useLocation();
     const navgaet= useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handelOrderfirm= ()=>{
        alert('your Order is placed successfully')
        localStorage.removeItem('card');
        navgaet(from,{replace:true})

    } 



    
  return (
    <div className='modalCard'>
        <Button  variant='primary' className='py-2' onClick={handlShow}>Proceed to Checkout</Button>
        <Modal show={show}
        onHide={handleClose}
        onimation={false}
        className='modal fade'
        centered
        
        >
           
           <Tabs style={{margin:'20px', textAlign:'center',border:'none'}}>
              <TabList>
                <Tab>
                 <ul className='nav  ' id='myTab' role='tablist'>
                 <li className='nav-item' role='presentation'>  
                                      <a onClick={()=>handletabchinge('visa')}
                                      id='visa-tab'
                                      data-toggle='tab'
                                      role='tab'
                                      aria-controls='visa'
                                      aria-selected={activtab === 'visa'}
                                      className={`nav-link ${activtab === 'visa' ? 'active' : ''}`}
                                      href="#visa"><img src="https://i.imgur.com/sB4jftM.png" width='80' alt="" />
                                     </a>
               
                                     </li>

                 </ul>


                </Tab>
                <Tab>
                    <ul className='nav  'id='myTab' role='tablist' >
                    <li className='nav-item' role='presentation' >
                                    <a onClick={()=>handletabchinge('paypal') }
                                      id='visa-tab'
                                      data-toggle='tab'
                                      role='tab'
                                      aria-controls='paypal'
                                      aria-selected={activtab === 'paypal'}
                                      className={`nav-link ${activtab === 'paypal' ? 'active' : ''}`}
                                      href="#paypal"><img src="https://i.imgur.com/yK7EDD1.png" width={'80'} alt="" />
                                    </a>
                                </li>
                    </ul>


                 </Tab> 
              </TabList>

              <TabPanel>
                {/*contents */}
                <div className='tab-content' id='myTabContent'>
                                {/* visa content */}
                                <div className={`tab-pane fade ${activtab === 'visa' ? 'show active' :''}`}
                                id='visa'
                                role='tabpanel'
                                aria-labelledby='visa-tab'
                                >
                                    {/* visa tap content */}
                                    <div className='mt-4 mx-4'> 
                                        <div className='text-center'>
                                            <h5>Credit Card</h5>
                                        </div>
                                        <div className='from mt-3'>
                                            <div className='inputbox'>
                                                <input type="text" name='name' id='name' className='form-control' required />
                                                <span>Cardholder Name</span>
                                            </div>
                                            <div className='inputbox'>
                                                <input type="number" min='6' max='999' name='name' id='number' className='form-control' required />
                                                <span>Cart Number</span><i className='fa fa-eye'></i>
                                            </div>
                                            <div className='d-flex flex-row' >
                                             <div className='inputbox'>
                                                <input type="text" min='6' max='999' name='name' id='number' className='form-control' required />
                                                <span>Expiration Date</span>
                                             </div>
                                             <div className='inputbox'>
                                                <input type="number" required min='6' max='999' name='name' id='number' className='form-control'  />
                                                <span>cvv</span>
                                             </div>


                                            </div>
                                            <div className='px-5 pay'>
                                                <button type='submit' onClick={handelOrderfirm} className='btn btn-success btn-block'>Order</button>

                                            </div>
                                           

                                        </div>

                                    </div>
                                  
                                </div>
                                </div>
              </TabPanel>
              <TabPanel>
               <div 
                id='paypal'
                role='tabpanel'
                aria-labelledby='paypal-tab'
               >
                <div className='mt-4 mx-4'> 
                                        <div className='text-center'>
                                            <h5>Paypal Acount Info</h5>
                                        </div>
                                        <div className='from mt-3'>
                                            <div className='inputbox'>
                                                <input type="text" name='name' id='name' className='form-control' required />
                                                <span>Enter your email</span>
                                            </div>
                                            <div className='inputbox'>
                                                <input type="text" min='1' max='999' name='name' id='number' className='form-control' required />
                                                <span>your Name</span>
                                            </div>
                                            <div className='d-flex flex-row' >
                                             <div className='inputbox'>
                                                <input type="number" min='1' max='999' name='name' id='number' className='form-control' required />
                                                <span>Extra info</span>
                                             </div>
                                             
                                            </div>
                                            <div className='px-5 pay'>
                                                <button onClick={handelOrderfirm} className='btn btn-success btn-block'>Order Now</button>

                                            </div>
                                           

                                        </div>

                                    </div>
                

               </div>
               
              </TabPanel>
            </Tabs>

        </Modal>
    </div>
  )
}

export default CheckOutPage
