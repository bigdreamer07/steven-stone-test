import React from 'react';
import './Content.scss';

import Review from './Review/Review';
import Helpers from './Helpers/Helpers';
import Subscribe from './Subscribe/Subscribe';
import CustomerReviews from './CustomerReviews/CustomerReviews';

const Content = () => {
  return (
    <div className="Content">
      <Review />
      <Helpers />
      <CustomerReviews />
      <Subscribe />
    </div>
  );
}

export default Content;
