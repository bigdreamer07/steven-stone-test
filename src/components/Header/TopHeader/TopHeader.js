import React from 'react'
import './TopHeader.scss';
import { useMediaQuery } from 'react-responsive'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";

import bookIcon from '../../../assets/img/book.png';
import whatsAppIcon from '../../../assets/img/whatsapp.png';
import clickCollectIcon from '../../../assets/img/click-collect.png';

const Item = props => {
  const { icon, title } = props;
  return (
    <Col>
      <a href="/#" className="justify-content-md-center link"> 
        <img src={icon} alt="Book Icon" className="icon-png" />
        <span className="item-title">{title}</span>
      </a>
    </Col>
  )
}

const TopHeader = () => {
  const isCarouselWidth = useMediaQuery({
    query: '(max-width: 1000px)'
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  });

  var settings = {
    adaptiveHeight: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="TopHeader" style={{ backgroundColor: isMobile ? "#1e5967" : "#E77E18" }}>
      <div className="justify-content-md-center p-2 container">
        { isMobile && 
          <span className="mobile-title text-white">Sale Now On - Up To 40% Off</span>
        }

        { !isCarouselWidth && !isMobile &&
          <Row>
            <Item icon={bookIcon} title="Book your virtual consultation now" /> 
            <Item icon={whatsAppIcon} title="Contact A Specialist on WhatsApp" /> 
            <Item icon={clickCollectIcon} title="Click And Collect Now Available" /> 
          </Row>
        }
        { isCarouselWidth && !isMobile &&
          <Slider {...settings}>
            <Item icon={bookIcon} title="Book your virtual consultation now" />
            <Item icon={whatsAppIcon} title="Contact A Specialist on WhatsApp" />
            <Item icon={clickCollectIcon} title="Click And Collect Now Available" />
          </Slider>
        }
      </div>
    </div>
  );
}

export default TopHeader;
