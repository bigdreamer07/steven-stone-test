import React from 'react'
import './HeaderContent.scss';
import { useMediaQuery } from 'react-responsive'
import { Container, Row, Col } from 'react-bootstrap';

import Logo from '../../../assets/img/Logo.png';
import PhoneIcon from '../../../assets/img/phone-icon.png';
import LocationIcon from '../../../assets/img/location-icon.png';
import AccountIcon from '../../../assets/img/account-icon.png';
import CartIcon from '../../../assets/img/cart-icon.png';
import MenuIcon from '../../../assets/img/menu-icon.png';
import SearchIcon from '../../../assets/img/search-icon.png';

const WebHeaderContent = () => {
  return (
    <div className="WebHeaderContent">
      <div className="header-top">
        <div xs lg="4">
          <button className="consult-button">Book A Consultation</button>
          <button className="phone-button">
            <img src={PhoneIcon} />
            <span>  0800 080 3535</span>
          </button>
        </div>

        <div xs lg="4">
          <img src={Logo} />
        </div>
        
        <div xs lg="4">
          <div className="right-box">
            <input className="search-input" />
            <div className="right-icon-box">
              <a to="/#" className="right-icons"><img src={LocationIcon} /></a>
              <a href="/#" className="right-icons"><img src={AccountIcon} /></a>
              <a href="/#" className="right-icons"><img src={CartIcon} /></a>
            </div>
          </div>
        </div>
      </div>

      <Container className="header-nav">
        <a href="/#" className="a header-nav-item">Diamonds</a>
        <a href="/#" className="a header-nav-item">Engagement Rings</a>
        <a href="/#" className="a header-nav-item">Wedding Rings</a>
        <a href="/#" className="a header-nav-item">Eternity Rings</a>
        <a href="/#" className="a header-nav-item">Jewellery</a>
        <a href="/#" className="a header-nav-item">Bespoke</a>
        <a href="/#" className="a header-nav-item">Learn</a>
      </Container>
    </div>
  )
};

const MobileHeaderContent = () => {
  return (
    <div className="MobileHeaderContent">
      <div className="menu-toogle-container">
        <a className="btn">
          <img src={MenuIcon} />
        </a>
      </div>
      <div className="icon-container">
        <img src={Logo} />
      </div>
      <div className="search-cart-container">
        <a className="btn">
          <img src={SearchIcon} />
        </a>
        <a className="btn">
          <img src={CartIcon} />
        </a>
      </div>
    </div>
  );
}

const HeaderContent = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  });

  return (
    <div className="HeaderContent"> 
      { !isMobile ? <WebHeaderContent /> : <MobileHeaderContent /> }
    </div> 
  );
}

export default HeaderContent;
