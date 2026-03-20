import { PreviewRounded } from '@mui/icons-material';
import React from 'react';
import './homepage-screen.css'
import HomepageBanner from './homepage-banner';
import HomepageDetails from './homepage-details';
import Footer from '../component/footer/footer';



function homepagescreen(){
  return (
    <div className="homescreen">
        
      <HomepageBanner/>
      <HomepageDetails />
      <Footer/>
    </div>
  )
}
export default homepagescreen;

