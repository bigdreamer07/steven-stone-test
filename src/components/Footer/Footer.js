import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Row, Col } from 'react-bootstrap';

import MobileFooter from './MobileFooter/MobileFooter';
import WebFooter from './WebFooter/WebFooter';

const Footer = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  });

  return (
    <div className="Footer">
      <div>
        { !isMobile ? <WebFooter /> : <MobileFooter /> }
      </div>
    </div>
  );
}

export default Footer;
