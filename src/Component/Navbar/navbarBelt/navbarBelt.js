import React from 'react';
import './navbarBelt.css';
import amazonLogo from '../../../Assets/amazonLogo.png';
import india from '../../../Assets/india.png';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavbarBelt = () => {
  return (
    <div className='navbarBelt'>
        <div className='leftNavBelt'>
        <div className ="leftNavBeltLogo">
        <img className='amazonLogoNavbar' src ={amazonLogo} alt ='amazonlogo'></img>
        <span className='navbar_inlogo'>.in</span>
        </div>

        <div className='navbarBeltLocation'>
            <div className='navbarBeltLocationImg'>
            <FmdGoodOutlinedIcon className='navBeltLocationImgIcon' />
            </div>
           
            <div className='navbarBeltLocationPlace'>
                <div className='navbarBeltLocationTop'>Delivering to Dehradun 248001</div>
                <div className='navbarBeltLocationBottom'>Update Location </div>
            </div>
        </div>
        </div>


        <div className ="navbarBeltSearchBox">
            <div className='navbarBeltSearchDiv'>
            <div className='navbarSearchBoxAll'>
            <div className='navbarSearchBoxAllText'>All</div>
            <ArrowDropDownOutlinedIcon sx = {{fontsize :"20px"}}/>
            </div>
             <input type ="text" className='navbarInputSearchBox' placeholder='Search Amazon.in'/>
             <div className='searchIconNavbarBelt'>
                <SearchIcon className='searchIconNavbarBeltIcon'/>
             </div>
            </div> 
        </div>
        <div className='rightNavBelt'>
            <div className='indianFlagcode'>
                <img src = {india} className='indiaflag'/>
                <div className='indiaCodeNavbarBelt'>EN
                <ArrowDropDownOutlinedIcon className='indiaCodeNavbarBeltDrop' /></div>
            </div>

        <div className='hellosign'>
            <div className='helloTop'>Hello,Sign in</div>
            <div className="Account">Account & Lists</div>
        </div>
           <div className='returns'>
            <div className='returntop'>Returns</div>
            <div className='orders'>& Orders</div>
        </div>
        <div className='cart'>
            <span className ="ItemCart">2</span>
            <div className='CartIcon'><ShoppingCartOutlinedIcon/><span className='cartTitle'>Cart</span></div>

        </div>
        </div>
        </div>
  )
}
export default NavbarBelt;