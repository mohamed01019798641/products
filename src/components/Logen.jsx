
/* eslint-disable react/no-unescaped-entities */


import { Link, useLocation, useNavigate } from 'react-router-dom';



const Logen = () => {
    
        const location=useLocation();
        const navgit=useNavigate();
        


    const handlelogin=(evet)=>{
        const from =location.state?.from?.pathname || '/';

   

        evet.preventDefault(evet);
        const form =evet.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(`email:${email}`,`password:${password}`)
        alert('Login successful!');
        navgit(from,{replace:true})
        
    
    }
   





    
  return (
    <div  >
       
        <div className='login-section padding-tb section-bg ' >
            <div className="container ">
                <div className='account-wrapper m-50' style={{marginTop:'50px'}}>
                    <h3>Login</h3>
                    <form className='account-form' onSubmit={handlelogin} >
                      <div className='form-group'>
                        <input type='email' name='email' id='email' placeholder='Email Address *' required />
                      </div>
                      <div className='form-group'>
                        <input type='password' name='password' id='password' placeholder='Password *' required />
                      </div>
                    
                     
                      <div className='form-group'>
                        <div className='d-flex justify-content-between flex-wrap pt-sm-2'>
                            <div className='checkgroup'>
                                <input type='checkbox' name='remember' id='remember' />
                                    <label htmlFor="remember">Remember Me</label>  
                            </div>
                            <Link to='Forgetpassword?'>Forget password? </Link>
                        </div>
                      </div>
                      <div className='from-group m-19'>
                        <button type='submit' className='d-block lab-btn w-100'>
                            <span>Login now</span>
                        </button>

                      </div>
                    </form>
                     {/* account bottom */}
                     <div className='account-bottom p-2'>
                        <span className='d-block cate pt-10 '>Don't Have Account? <Link to='/sing-up'>Sing Up</Link>
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

export default Logen
