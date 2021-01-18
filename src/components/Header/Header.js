import React from 'react'
import './Header.scss';

import TopHeader from './TopHeader/TopHeader';
import HeaderContent from './HeaderContent/HeaderContent';

const Header = () => {
  return (
    <div className="Header">
      <TopHeader />
      <HeaderContent />
    </div>
  );
}

export default Header;
