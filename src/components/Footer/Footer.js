import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Row, Col } from 'react-bootstrap';

import MobileFooter from './MobileFooter/MobileFooter';

const WebFooter = () => {
  return (
    <div>

    </div>
  )
}

const Footer = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  });

  return (
    <div className="Footer">
      <Container className="container">
        { !isMobile ? <WebFooter /> : <MobileFooter /> }
      </Container>
    </div>
  );
}

export default Footer;
