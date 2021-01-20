import React from 'react';
import './CustomerReviews.scss';
import Slider from "react-slick";

import Stars from '../../../assets/img/stars.png';
import FeefoLogo from '../../../assets/img/feefo-black.png';
import Trustpiolt from '../../../assets/img/trustpilot-black.png';
import Facebook from '../../../assets/img/facebook-black.png';
import QuoteIcon from '../../../assets/img/quote.png';


var settings = {
  arrows: false,
  variableWidth: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToScroll: 1
};

const ReviewItem = (props) => {
  const { grayBg } = props;
  return (
    <div className={"review-item " + (grayBg ? "grayBackground" : "")}>
      <img alt="stars" src={Stars} />
      <span className="h5 name">David Kinsella</span>
      <span className="h6 review-txt">
        “Molly was a great help when choosing an enagement ring. She chose the perfect diamond for a great price. I would highly recommend buying at Steven Stone”
      </span>
      <div className="review-footer">
        <img alt="quote" src={QuoteIcon} />
      </div>
    </div>
  )
}

const CustomerReviews = () => {
  return (
    <div className="CustomerReviews">
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
        <Slider {...settings}>
          <ReviewItem grayBg={false} />
          <ReviewItem grayBg={true} />
          <ReviewItem grayBg={false} />
          <ReviewItem grayBg={true} />
        </Slider>
      </div>
    </div>
  );
}

export default CustomerReviews;
