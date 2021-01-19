import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Row, Col } from 'react-bootstrap';
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

import DekoLogo from '../../../assets/img/dekopay.png';
import MastercardLogo from '../../../assets/img/mastercard.png';
import AmericanExpressLogo from '../../../assets/img/american-express.png';
import VisaLogo from '../../../assets/img/visa.png';

var settings = {
    slidesToShow: 6,
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
    <div className="WebFooter">
        <div className="footer-top">
            <div className="footer-menu">
                <div className="submenu">
                    <div className="menu-title">
                        Shop Online
                    </div>
                    <a className="menu-item">Privacy Policy</a>
                    <a className="menu-item">Terms & Conditions</a>
                    <a className="menu-item">Sitemap</a>
                    <a className="menu-item">Shipping & Returns</a>
                    <a className="menu-item">About Us</a>
                    <a className="menu-item">Contact Us</a>
                </div>
                <div className="submenu">
                    <div className="menu-title">
                        About Us
                    </div>
                    <a className="menu-item">My Account</a>
                    <a className="menu-item">My Shopping Cart</a>
                    <a className="menu-item">My Wishlist</a>
                    <a className="menu-item">Checkout</a>
                    <a className="menu-item">Order Tracking</a>
                    <a className="menu-item">Login / Register</a>
                </div>
                <div className="submenu">
                    <div className="menu-title">
                        Customer Service
                    </div>
                    <a className="menu-item">Our Story</a>
                    <a className="menu-item">Read Our Blog</a>
                    <a className="menu-item">Portfolio</a>
                    <a className="menu-item">Our Team</a>
                    <a className="menu-item">Careers</a>
                    <a className="menu-item">Store Location</a>
                </div>
                <div className="submenu">
                    <div className="menu-title">
                        Help & Guidance
                    </div>
                    <a className="menu-item">Buying Guide</a>
                    <a className="menu-item">Diamond Guide</a>
                    <a className="menu-item">Finance Information</a>
                    <a className="menu-item">Terms & Conditions</a>
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
                <Slider {...settings}>
                    <img src={FeefoLogo} />
                    <img src={TrustpilotLogo} />
                    <img src={GoogleLogo} />
                    <img src={FacebookLogo} />
                    <img src={AssayLogo} />
                    <img src={NajLogo} />
                </Slider>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="copyright">
                © 2019 Steven Stone Ltd.<br/>
                All Rights Reserved.
            </div>
            <div className="card-container">
                <img src={DekoLogo} className="card-img" />
                <img src={VisaLogo} className="card-img" />
                <img src={MastercardLogo} className="card-img" />
                <img src={AmericanExpressLogo} className="card-img" />
            </div>
        </div>
    </div>
  )
}

export default WebFooter;
