import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
    const cartstyle={
        background:'#F59E0D',
        display:'flex',
        padding:'6px 12px',
        borderRadius:'50px'
    }
  return <>
 <nav className="container mx-auto flex items-center justify-between py-4"> 
     <Link to="/">
         <img style={{height: 45}} src="/Images/logo.png" alt="logo" />
     </Link>
     <ul className='flex items-center'>
         <li >
             <Link to="/">Home</Link>
         </li>
         <li className='ml-6'>
         <Link to="/products">Products</Link>
         </li>
         <li className='ml-6'>
             <Link to="/cart">
                 <div style={cartstyle}>
                     <span >10</span>
                     <img className='ml-2 ' src="/Images/cart.png" alt="" />
                 </div>
             </Link>
         </li>
     </ul>
 </nav>
  </>;
};

export default Navigation;
