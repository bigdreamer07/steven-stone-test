import React from 'react';
import './Content.scss';

import Helpers from './Helpers/Helpers';
import Subscribe from './Subscribe/Subscribe';
import Reviews from './Reviews/Reviews';

const Content = () => {
  return (
    <div className="Content">
      <Helpers />
      <Reviews />
      <Subscribe />
    </div>
  );
}

export default Content;
