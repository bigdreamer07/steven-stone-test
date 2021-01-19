import React from 'react';
import './Content.scss';

import SelectStone from './SelectStone/SelectStone';
import Review from './Review/Review';
import Helpers from './Helpers/Helpers';
import Subscribe from './Subscribe/Subscribe';
import CustomerReviews from './CustomerReviews/CustomerReviews';
import Product from './Product/Product';

const Content = () => {
  return (
    <div className="Content">
      <Product />
      <SelectStone />
      <Review />
      <Helpers />
      <CustomerReviews />
      <Subscribe />
    </div>
  );
}

export default Content;
