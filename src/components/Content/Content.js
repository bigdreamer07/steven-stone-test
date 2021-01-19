import React from 'react';
import './Content.scss';

import Helpers from './Helpers/Helpers';
import Subscribe from './Subscribe/Subscribe';

const Content = () => {
  return (
    <div className="Content">
      <Helpers />
      <Subscribe />
    </div>
  );
}

export default Content;
