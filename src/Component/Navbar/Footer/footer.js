import React from 'react'
import './footer.css';
import amazonLogo from '../../../Assets/amazonLogo.png';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="footerCont1">
                    <div className="contentFooterTitle">Get To Know Us</div>

                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">About Amazon</div>
                        <div className="contentFooterSubTitleCont">Careers</div>
                        <div className="contentFooterSubTitleCont">Press Release</div>
                    </div>
                    
                </div>
                <div className="footerCont1">
                    <div className="contentFooterTitle">Connect With Us</div>
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">Instagram</div>
                        <div className="contentFooterSubTitleCont">Twitter</div>
                        <div className="contentFooterSubTitleCont">Facebook</div>
                    </div>
                </div>

                <div className="footerCont1">
                    <div className="contentFooterTitle">Make Money With US</div>
                      <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">Sell on Amazon</div>
                        <div className="contentFooterSubTitleCont">Sell under Amazon Accelerator</div>
                        <div className="contentFooterSubTitleCont">Protect and Build your Brand</div>
                        <div className="contentFooterSubTitleCont">Amazon Global Selling</div>
                        <div className="contentFooterSubTitleCont">Supply to Amazon</div>
                        <div className="contentFooterSubTitleCont">Become an Affilate </div>
                        <div className="contentFooterSubTitleCont">Fulfilment by Amazon</div>
                        <div className="contentFooterSubTitleCont">Advertise Your Products</div>
                        <div className="contentFooterSubTitleCont">Amazon Pay on Merchants </div>
                    </div>
                </div>
                
                <div className="footerCont1">
                    <div className="contentFooterTitle">Lets Us Help You</div>
                    <div className="contentFooterSubTitleCont">Your Account</div>
                    <div className="contentFooterSubTitleCont">Returns Centre</div>
                    <div className="contentFooterSubTitleCont">Recalls and Product Safety Alert </div>
                    <div className="contentFooterSubTitleCont">100% Purchase Protection</div>
                    <div className="contentFooterSubTitleCont">Amazon App Development</div>
                    <div className="contentFooterSubTitleCont">Help</div>
                      
                </div>
            </div>
        <div>
        <div className="line"></div>
        </div>

        <div className="footer-bar">
        <div className="footer-content">
        
       
        <div className="left"></div>

      
        <div className="logo">
          <img
            src={amazonLogo}
            alt="Amazon"
          />
        </div>

        <div className="controls">
          <div className="dropdown">
            🌐 English ⌄
          </div>

          <div className="dropdown">
            🇮🇳 India
          </div>
        </div>

        </div>
    


       <div className="footer2">
      <div className="footer-container">
        
        <div className="footer-column">
          <h4>AbeBooks</h4>
          <p>Books, art<br />& collectibles</p>

          <h4 className="mt">Shopbop</h4>
          <p>Designer<br />Fashion Brands</p>
        </div>

        <div className="footer-column">
          <h4>Amazon Web Services</h4>
          <p>Scalable Cloud<br />Computing Services</p>

          <h4 className="mt">Amazon Business</h4>
          <p>Everything For<br />Your Business</p>
        </div>

        <div className="footer-column">
          <h4>Audible</h4>
          <p>Download<br />Audio Books</p>

          <h4 className="mt">Amazon Prime Music</h4>
          <p>100 million songs, ad-free<br />Over 15 million podcast episodes</p>
        </div>

        <div className="footer-column">
          <h4>IMDb</h4>
          <p>Movies, TV<br />& Celebrities</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          Conditions of Use & Sale &nbsp;&nbsp;
          Privacy Notice &nbsp;&nbsp;
          Interest-Based Ads
        </p>
        <p>© 1996-2026, Amazon.com, Inc. or its affiliates</p>
      </div>
 
      
         </div>
        </div>
        </div>
    )
}

export default Footer