import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import '../components/Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const handleclick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
   <>
   <nav className="navbar">
    
    <div className="nav-container">
        <Link to={"/"} className='navbar-logo'>TRVLO <i className='fab fa-typo3'/></Link>
    
        <div className='ham-menu' onClick={handleclick}>
            <i className={click ? "fas fa-times": 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>services</Link>
            </li>
            <li className='nav-item'>
                <Link to='/Product' className='nav-links' onClick={closeMobileMenu}>Products</Link>
            </li>
            <li className='nav-item'>
                <Link to='/Sign-up' className='nav-links' onClick={closeMobileMenu}>Sign-up</Link>
            </li>
        </ul>
    </div>
   </nav>

   </>

)}

export default Navbar;