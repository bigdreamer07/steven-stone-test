import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Reviews.scss';


import Stars from '../../../assets/img/stars.png';
import FeefoLogo from '../../../assets/img/feefo-black.png';
import Trustpiolt from '../../../assets/img/trustpilot-black.png';
import Facebook from '../../../assets/img/facebook-black.png';
import QuoteIcon from '../../../assets/img/quote.png';

const ReviewItem = () => {
  return (
    <div className="review-item">
      <img src={Stars} />
      <span className="h5 name">David Kinsella</span>
      <span className="h6 review-txt">
        “Molly was a great help when choosing an enagement ring. She chose the perfect diamond for a great price. I would highly recommend buying at Steven Stone”
      </span>
      <div className="review-footer">
        <img src={QuoteIcon} />
      </div>
    </div>
  )
}

const Reviews = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  });

  return (
    <div className="Reviews">
      <ReviewItem />
    </div>
  );
}

export default Reviews;
