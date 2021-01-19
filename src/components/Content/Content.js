import React from 'react';
import './Content.scss';

import Review from './Review/Review';
import Helpers from './Helpers/Helpers';
import Subscribe from './Subscribe/Subscribe';

const Content = () => {
  return (
    <div className="Content">
      <Review />
      <Helpers />
      <Subscribe />
    </div>
  );
}

export default Content;
