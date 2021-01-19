import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Reviews.scss';
import Slider from "react-slick";

import Stars from '../../../assets/img/stars.png';
import FeefoLogo from '../../../assets/img/feefo-black.png';
import Trustpiolt from '../../../assets/img/trustpilot-black.png';
import Facebook from '../../../assets/img/facebook-black.png';
import QuoteIcon from '../../../assets/img/quote.png';


var settings = {
  adaptiveHeight: true,
  arrows: false,
  variableWidth: true
};

const ReviewItem = (props) => {
  const { grayBg } = props;
  return (
    <div className={"review-item " + (grayBg ? "grayBackground" : "")}>
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
      <div className="review-title-container">
        <span className="title-text">Over 500 5 Star Customer Reviews</span>
        <span className="title">See What<br />People Say</span>
        <div className="advertise-logo-container">
          <a href="/#" className="link"><img alt="feefo" src={FeefoLogo} /></a>
          <a href="/#" className="link"><img alt="trustpilot" src={Trustpiolt} /></a>
          <a href="/#" className="link"><img alt="facebook" src={Facebook} /></a>
        </div>
      </div>

      <div className="reviews-container">
        <ReviewItem grayBg={false} />
        <ReviewItem grayBg={true} />
      </div>
    </div>
  );
}

export default Reviews;
