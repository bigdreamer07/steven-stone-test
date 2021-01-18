import React, { useState } from 'react';
import './Subscribe.scss';

import { Container, Row, Col } from 'react-bootstrap';

const Subscribe = () => {
  const [active, setActive] = useState('male');

  return (
    <div className="Subscribe">
      <Container className="container">
        <div className="left">
          <h5>Subscribe To Our Newsletter</h5>
          <p>Subscribe to our newletter to keep up to date on events,<br />new collections and offers straight to your inbox.</p>
        </div>

        <div className="right">  
          <div className="buttonGroup">
            <button onClick={() => setActive('male')} className={ active=="male" ? "active" : "inactive"}>MALE</button>
            <button onClick={() => setActive('famale')} className={ active!="male" ? "active" : "inactive"}>FEMALE</button>
          </div>
          <div>
            <input className="email-input" placeholder="Your email address" />
          </div>
          <div>
            <p>
              By submitting your details here you consent to recieve marketing emails from Steven Stone including sales and announcement of future collection launches. You can unsubscribe at any time by clicking the unsuscribe link at the end of every email.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Subscribe;
