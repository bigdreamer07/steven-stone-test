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
          <p className="item-title">{'Shipping & Returns'}</p>
          <p style={{fontSize: '14px'}}>Purchases made online can be<br />returned or exchanged within 30 days.</p>
        </div>

        <div className="helper-item-container">
          <img alt="drop" src={DropLogo} className="item-icon"/>
          <p className="item-title">Drop A Hint</p>
          <p style={{fontSize: '14px'}}>Let us tell someone special<br />what your're wishing for</p>
        </div>
        
        <div className="helper-item-container">
          <img alt="size" src={SizeLogo} className="item-icon"/>
          <p className="item-title">Size Guide</p>
          <p style={{fontSize: '14px'}}>Determine your bracelet,<br />necklace or ring size.</p>
        </div>
      </div>
    </div>
  );
}

export default Helpers;
