import React from 'react';
import './Content.scss';

import Review from './Review/Review';
import Subscribe from './Subscribe/Subscribe';

const Content = () => {
  return (
    <div className="Content">
      <Review />
      <Subscribe />
    </div>
  );
}

export default Content;
