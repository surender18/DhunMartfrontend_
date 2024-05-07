import React, { useState } from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'
const Navbar = () => {
  const[menu,setMenu]=useState("Home");
  return (
    
    <div className='navbar'>
      <Link to='/'> <img className='logo' src="logo.png" alt="" /> </Link>
   
    
    <div className="navbar-menu">

   <ul>
   
    <a to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</a>
    <a  onClick={()=>setMenu("Brands")} className={menu==="Brands"?"active":""}>Brands</a>
    <a onClick={()=>setMenu("Categories")} className={menu==="Categories"?"active":""}>Categories</a>
    <a href='#app-download' onClick={()=>setMenu("App Download")} className={menu==="App Download"?"active":""}>App Download</a>
    <a href='#footer' onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</a>
    </ul>
    </div>
    <div className="navbar-right">
      <img className='navbar-search-icon' src="search1.png" alt="" /> 
      <img className='navbar-cart' src="cart.png" alt="" />

    <button >Sign up</button>
    </div>
</div>
  )
}

export default Navbar
