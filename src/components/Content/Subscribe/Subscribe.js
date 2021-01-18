import React from 'react';
import './Subscribe.scss';

import { Container, Row, Col } from 'react-bootstrap';

const Subscribe = () => {
  return (
    <div className="Subscribe">
      <Container className="container">
        <div className="left">
          <h5>Subscribe To Our Newsletter</h5>
          <p>Subscribe to our newletter to keep up to date on events,<br />new collections and offers straight to your inbox.</p>
        </div>

        <div className="right">  
          <input className="email-input" placeholder="Your email address" />
        </div>
      </Container>
    </div>
  );
}

export default Subscribe;
