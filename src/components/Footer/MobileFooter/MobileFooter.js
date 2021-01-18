import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Slider from "react-slick";

import './MobileFooter.scss';

import GoogleLogo from '../../../assets/img/google.png';
import FacebookLogo from '../../../assets/img/facebook.png';
import AssayLogo from '../../../assets/img/assay.png';
import TrustpilotLogo from '../../../assets/img/trustpilot.png';
import NajLogo from '../../../assets/img/naj.png';
import FeefoLogo from '../../../assets/img/feefo.png';

const Items = {
  shopOnline: ["Privacy Policy", "Terms & Conditions", "Sitemap", "Shipping & Returns", "About Us", "Contact Us"],
  aboutUs: ["My Account", "My Shopping Cart", "My Wishlist", "Checkout", "Order Tracking", "Login / Register"],
  customerService: ["Our Story", "Read Our Blog", "Portofolio", "Our Team", "Careers", "Store Location"],
  help: ["Buying Guide", "Diamond Guide", "Finance Information", "Terms & Conditions"]
}

const Accordion = withStyles({
  root: {
    backgroundColor: '#FAFAFA',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    paddingTop: 5,
    paddingBottom: 5,
  },
}))(MuiAccordionDetails);

var settings = {
  slidesToShow: 5,
  adaptiveHeight: true,
  infinite: true,
  arrows: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
};

const Dropdown = (props) => {
  const { title, expanded, handleChange, items } = props;
  return (
    <Accordion square expanded={expanded === title} onChange={handleChange(title)}>
      <AccordionSummary aria-controls={title + "d-content"} id={title + "d-header"}>
        <div className="dropdown-item-header">
          <span className="dropdown-item-title">{title}</span>
          { expanded !== title ? <ExpandMoreIcon /> : <ExpandLessIcon /> }
        </div>
      </AccordionSummary>
      
      { items.map(item => (
        <AccordionDetails>
          <a href="/#" className="a">{item}</a>
        </AccordionDetails>
      )) }
    </Accordion>
  )
}

const MobileFooter = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="MobileFooter">
      <div className="footer-top">
        <Dropdown title="Shop Online" expanded={expanded} handleChange={handleChange} items={Items.shopOnline} />
        <Dropdown title="About Us" expanded={expanded} handleChange={handleChange} items={Items.aboutUs} />
        <Dropdown title="Customer Service" expanded={expanded} handleChange={handleChange} items={Items.customerService} />
        <Dropdown title={"Help & Guidance"} expanded={expanded} handleChange={handleChange} items={Items.help} />
      </div>

      <div className="footer-bottom">
        <Slider {...settings}>
          <img src={GoogleLogo} />
          <img src={FeefoLogo} />
          <img src={AssayLogo} />
          <img src={NajLogo} />
          <img src={FacebookLogo} />
          <img src={TrustpilotLogo} />
        </Slider>

        <div className="cards-container">

        </div>
      </div>
    </div>
  )
}

export default MobileFooter;