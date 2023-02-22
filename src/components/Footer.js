import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../components/Navbar.css';


function Navbar() {
    
  return (
   <>
   <nav className="footer">
    
    <div className="footer-container">
        <div className='footer-icon'>
            <InstagramIcon className='icon' sx={{fontSize:'50px' , "&:hover":{color:'#d81b60'}}}/>
            <GoogleIcon className='icon' sx={{fontSize:'50px' , "&:hover":{color:'#bbdefb'}}}/>
            <YouTubeIcon className='icon' sx={{fontSize:'60px' , "&:hover":{color:'#e53935'}}}/>
            <FacebookIcon className='icon' sx={{fontSize:'50px' , "&:hover":{color:'#1565c0'}}}/>
           
        </div>
        
        <h5> &copy;2022-2023 TRVLO.COM | All Rights Reserved</h5>
   <Link to={"/"} className='footer-logo'>TRVLO <i className='fab fa-typo3'/></Link>
    
        </div>
   
    <div className='copy'> 
   
    </div>
   
   </nav>
 

   </>

)}

export default Navbar;