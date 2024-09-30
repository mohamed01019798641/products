
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Signup = () => {
    const{error,seterror}=useState('')
    const location =useLocation();
    const navigate=useNavigate();
    
   
    const handelSingup=(ev)=>{
        const from =location.state?.from?.pathname || '/';
        ev.preventDefault();

        const form =ev.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmpassword = form.confirmpassword.value;
        const name = form.name.value;
        
        console.log(`email:${email}`,`password:${password}`,`name:${name}`,`confirmpassword:${confirmpassword}`)
        alert(`Login successful!`);

        navigate(from,{replace:true})


    }
  return (
    <div >
        <div className='login-section padding-tb section-bg ' >
            <div className="container ">
                <div className='account-wrapper m-50' style={{marginTop:'50px'}}>
                    <h3>Register Now</h3>
                    <form className='account-form' onSubmit={handelSingup} >
                      <div className='form-group'>
                        <input type='text' name='name' id='name' placeholder='Full name *' required />
                      </div>
                      <div className='form-group'>
                        <input type='email' name='email' id='email' placeholder='Email Address *' required />
                      </div>
                      <div className='form-group'>
                        <input type='number' name='password' id='password' placeholder='Password *' required />
                      </div>
                      <div className='form-group'>
                        <input type='number' name='confirmpassword' id='confirmpassword' placeholder='Confirm Password *' required />
                      </div>
                    
                     
                      
                      
                      <div className='from-group m-19'>
                        <button type='submit' className='d-block lab-btn w-100'>
                            <span>Login now</span>
                        </button>

                      </div>
                    </form>
                     {/* account bottom */}
                     <div className='account-bottom p-2'>
                        <span className='d-block cate pt-10 '> Have Account? <Link to='/login'>Login</Link>
                            </span>
                            <span className='or'>
                                <span>Or</span>
                            </span>
                            {/* secial login */}
                            <h5 className=''>Login With Soical Media</h5>
                            <ul className='lab-ul social-icons justify-content-center '>
                                <li>
                                    <button  className='github'><i className='icofont-github'></i></button>
                                    
                                </li>
                                <li>
                                    <a href='#'  className='facebook'><i className='icofont-facebook '></i></a>
                                </li>
                                <li>
                                    <a href='#'  className='twitter'><i className='icofont-twitter'></i></a>
                                </li>
                                <li>
                                    <a href='#'  className='linkedin'><i className='icofont-linkedin'></i></a>
                                </li>
                                <li>
                                    <a href='#'  className='instagram'><i className='icofont-instagram'></i></a>
                                </li>
                                <li>
                                    <a href='#'  className='pinterest'><i className='icofont-pinterest'></i></a>
                                </li>
                                
                            </ul>
                       

                     </div>

                    
                    

                </div>

            </div>
        </div>
    </div>
  )
}

export default Signup
