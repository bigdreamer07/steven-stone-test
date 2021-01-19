import React from 'react';
import './Content.scss';

import Review from './Review/Review';
import Helpers from './Helpers/Helpers';
import Subscribe from './Subscribe/Subscribe';
import Reviews from './Reviews/Reviews';

const Content = () => {
  return (
    <div className="Content">
      <Review />
      <Helpers />
      <Reviews />
      <Subscribe />
    </div>
  );
}

export default Content;
