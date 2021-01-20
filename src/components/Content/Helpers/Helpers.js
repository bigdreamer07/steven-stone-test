import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Helpers.scss';

import ShippingLogo from '../../../assets/img/gift.png';
import DropLogo from '../../../assets/img/heart.png';
import SizeLogo from '../../../assets/img/ruler.png';

const Helpers = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  });

  return (
    <div className="Helpers container">
      <div className={"content " + (!isMobile ? "row-items" : "column-items")}>
        <div className="helper-item-container">
          <img alt="ship" src={ShippingLogo} className="item-icon" />
          <span className="item-title">{'Shipping & Returns'}</span>
          <span className="item-description">Purchases made online can be<br />returned or exchanges an within 30 days.</span>
        </div>

        <div className="helper-item-container">
          <img alt="drop" src={DropLogo} className="item-icon"/>
          <span className="item-title">Drop A Hint</span>
          <span className="item-description">Let us tell someone special<br />what your're wishing for</span>
        </div>
        
        <div className="helper-item-container">
          <img alt="size" src={SizeLogo} className="item-icon"/>
          <span className="item-title">Size Guide</span>
          <span className="item-description">Determine your bracelet,<br />necklace or ring size.</span>
        </div>
      </div>
    </div>
  );
}

export default Helpers;
