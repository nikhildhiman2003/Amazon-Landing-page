import React from 'react'
import './navbarBanner.css'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

const NavbarBanner = () => {
  const options=[
  {"name":"Fresh"},
   {"name":"MX Player"},
    {"name":"Sell"},
     {"name":"BestSeller"},
      {"name":"Mobiles"},
        {"name":"Today's Deals"},
          {"name":"Customer Service"},
            {"name":"Prime"},
              {"name":"New Release"},
                {"name":"Fashion"},
                  {"name":"Electronics"},
                    {"name":"Amazone Pay"}
          
   ]
  return (
    <div className="navbarbanner">
      <div className="navbarBannerOptionsLeft">
        <div className='optionNavbarBaner'></div>
        <div className='option'><MenuTwoToneIcon/></div>
        <div className='All'>All</div>
      </div>
      {
        options.map((item,ind) => {
          return(
            <div className='optionNavbarBaner'key ={ind}>
              <div className='allOptionsNavbarBanner'>{item.name }</div>
            </div> 
          );
        })
      }
     
      <div className="navbarBannerOptionsRight">
        <img src ="https://m.media-amazon.com/images/G/31/img21/APAY/FEB26/travel/Bus_SMW_400x39._CB784699013_.jpg"alt="amazonimg"/>
      </div>


    </div>
  )
}
export  default NavbarBanner
