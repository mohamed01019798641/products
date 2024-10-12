import React, {  useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';

const Navbar = () => {
    const [menutoogel,setmenutoogel]=useState(false);
    const [scroll,setscroll]=useState(false);
    const [hedar,setheader]=useState(false);

    

    window.addEventListener('scroll',()=>{
        if(window.scrollY>200){
            setheader(true);
        }else{
            setheader(false);
        }

    })
  return (
    <header className={`header-section style-4 ${hedar ? 'header-fixed fadeInUp' :''}`}>
        {/* header top */}
        <div className={`header-top d-md-none  ${scroll ? 'open':''}`}>
            <div className="container">
                <div className='header-top-area'>
                <Link to='/sing-up'>Sing Up</Link>
                  <Link to='/sing-up' className='lab-btn me-3'><span>CreateAccout</span></Link>
                    
                    <Link to='/login'>Log In</Link>
                </div>
            </div>
        </div>
       {/* header bottom */}
       <div className='header-bottom'>
         <div className='container'>
            <div className='header-wrapper'>
                {/* logo */}
                <div className='logo-search-acte'>
                    <div className='logo'>
                        <Link to={'/'}>
                        <img src={logo} alt="" />
                        </Link>

                    </div>

                </div>

                {/* menu area */}
                <div className='menu-area'>
                    <div className='menu'>
                        <ul className={`lab-ul ${menutoogel ? 'active' : ''}`}>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/shop'>Shop</Link>
                            </li>
                            <li>
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li>
                             <Link to='/about'>About</Link>
                             </li>
                           
                        </ul>
                       
                        

                    </div>
                    {/* sign in & log in */}

                    <Link to='/sign-up' className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                    <Link to='/login' className='d-none d-md-block'>Log in</Link>

                    {/*  menu toggler */}
                    <div onClick={()=>setmenutoogel(!menutoogel)} className={`header-bar d-lg-none ${menutoogel ? 'active':''}` }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {/* social toggler */}
                    <div onClick={()=>setscroll(!scroll)} className='ellepsis-bar d-md-none'>
                        <i className="icofont-info-square"></i>
                    
                    </div>       
                </div>
            </div>
         </div>

       </div>
    </header>
  )
}

export default Navbar
