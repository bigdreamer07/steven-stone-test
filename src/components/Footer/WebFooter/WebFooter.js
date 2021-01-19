import React from 'react';
import Slider from "react-slick";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

import './WebFooter.scss';

import GoogleLogo from '../../../assets/img/google.png';
import FacebookLogo from '../../../assets/img/facebook.png';
import AssayLogo from '../../../assets/img/assay.png';
import TrustpilotLogo from '../../../assets/img/trustpilot.png';
import NajLogo from '../../../assets/img/naj.png';
import FeefoLogo from '../../../assets/img/feefo.png';
import McAfeeLogo from '../../../assets/img/mcafee.png';

import DekoLogo from '../../../assets/img/dekopay.png';
import MastercardLogo from '../../../assets/img/mastercard.png';
import AmericanExpressLogo from '../../../assets/img/american-express.png';
import VisaLogo from '../../../assets/img/visa.png';

var settings = {
  slidesToShow: 7,
  adaptiveHeight: true,
  infinite: true,
  arrows: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
      slidesToShow: 6,
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
  ]
};
  
const WebFooter = () => {
  return (
  <div className="WebFooter container">
    <div className="footer-top">
      <div className="footer-menu">
        <div className="submenu">
          <div className="menu-title">
            Shop Online
          </div>
          <a href="/#" className="menu-item">Privacy Policy</a>
          <a href="/#" className="menu-item">Terms & Conditions</a>
          <a href="/#" className="menu-item">Sitemap</a>
          <a href="/#" className="menu-item">Shipping & Returns</a>
          <a href="/#" className="menu-item">About Us</a>
          <a href="/#" className="menu-item">Contact Us</a>
        </div>
        <div className="submenu">
          <div className="menu-title">
            About Us
          </div>
          <a href="/#" className="menu-item">My Account</a>
          <a href="/#" className="menu-item">My Shopping Cart</a>
          <a href="/#" className="menu-item">My Wishlist</a>
          <a href="/#" className="menu-item">Checkout</a>
          <a href="/#" className="menu-item">Order Tracking</a>
          <a href="/#" className="menu-item">Login / Register</a>
        </div>
        <div className="submenu">
          <div className="menu-title">
            Customer Service
          </div>
          <a href="/#" className="menu-item">Our Story</a>
          <a href="/#" className="menu-item">Read Our Blog</a>
          <a href="/#" className="menu-item">Portfolio</a>
          <a href="/#" className="menu-item">Our Team</a>
          <a href="/#" className="menu-item">Careers</a>
          <a href="/#" className="menu-item">Store Location</a>
        </div>
        <div className="submenu">
          <div className="menu-title">
            Help & Guidance
          </div>
          <a href="/#" className="menu-item">Buying Guide</a>
          <a href="/#" className="menu-item">Diamond Guide</a>
          <a href="/#" className="menu-item">Finance Information</a>
          <a href="/#" className="menu-item">Terms & Conditions</a>
        </div>
        <div className="submenu">
          <div className="menu-title">
            Follow Us
          </div>
          <div className="icon-group">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <PinterestIcon />
          </div>
        </div>
      </div>
      <div className="footer-company">
        {/* <Slider {...settings}> */}
          <img alt="feefo" src={FeefoLogo} />
          <img alt="trustpilot" src={TrustpilotLogo} />
          <img alt="google" src={GoogleLogo} />
          <img alt="facebook" src={FacebookLogo} />
          <img alt="assay" src={AssayLogo} />
          <img alt="naj" src={NajLogo} />
          <img alt="mcafee" src={McAfeeLogo} />
        {/* </Slider> */}
      </div>
    </div>
    <div className="footer-bottom">
      <div className="copyright">
        © 2019 Steven Stone Ltd.<br/>
        All Rights Reserved.
      </div>
      <div className="card-container">
        <img alt="deko" src={DekoLogo} className="card-img" />
        <img alt="visa" src={VisaLogo} className="card-img" />
        <img alt="mastercard" src={MastercardLogo} className="card-img" />
        <img alt="american-express" src={AmericanExpressLogo} className="card-img" />
      </div>
    </div>
  </div>
  )
}

export default WebFooter;
