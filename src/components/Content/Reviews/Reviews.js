import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Reviews.scss';

import FeefoLogo from '../../../assets/img/feefo-black.png';
import Trustpiolt from '../../../assets/img/trustpilot-black.png';
import Facebook from '../../../assets/img/facebook-black.png';

const Reviews = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  });

  return (
    <div className="Reviews">
      <div className="review-title-bar">
        <p className="top-title">Over 500 5 Star Customer Reviews</p>
        <p className="title">See What<br />People Say</p>

        <div className="logo-container">
          <a href="/#" className="logo"><img alt="feefo" src={FeefoLogo} className="logo-img" /></a>
          <a href="/#" className="logo"><img alt="trustpilot" src={Trustpiolt} className="logo-img" /></a>
          <a href="/#" className="logo"><img alt="facebook" src={Facebook} className="logo-img" /></a>
        </div>
      </div>

      <div className="reviews-container">
        <div className="review-item">
          <h5>David Kinsella</h5>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
