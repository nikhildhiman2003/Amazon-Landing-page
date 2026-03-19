import React from 'react'
import './homebanner.css'
import homebannerItemProduct from '../../../homeProduct.json';
const Homebanner = () => {
    return (
    <div className="homeBanner">
     <img className='homeBannerimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg' />
      <div className="grayBackgroundHomeBanner"></div>
      <div className="homeBannerItemDiv">
       {
           homebannerItemProduct.product.map((item, ind) => {
           return (
            <div className="homeBannerItemDivCard">
            <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
            <div className="imgHomeBannerItemDivCard">
             {
               item.imgs.map((it, ind )=> {
                return (
                  <div className="imgBannerHomeDiv">
                    <img className='imgBannerHomeDivImg' src={it} />
                      <div className="imgBannerImgName">boAt Stone 1800 Bluet</div>
                        </div>
                           );
                  })
                  }
                  </div>
                   <div className="seeMoreHomeBanner">See More</div>
                    </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Homebanner;