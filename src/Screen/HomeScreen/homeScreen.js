import { PreviewRounded } from '@mui/icons-material';
import React from 'react';
import './homescreen.css'
import Homebanner from './HomeBanner/homebanner';
import Homedetails from './HomeDetails/homedetails';
import Footer from '../../Component/Navbar/Footer/footer';


const Homescreen = () => {
  return (
    <div className="homescreen">
        <Homebanner/>
        <Homedetails/>
        <Footer/>
    </div>
  )
}
export default Homescreen;