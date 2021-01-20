import React from 'react';
import './Filter.scss';

import { Container, Row, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

import Diamond1 from '../../../../../assets/img/diamond1.png';
import Diamond2 from '../../../../../assets/img/diamond2.png';
import Diamond3 from '../../../../../assets/img/diamond3.png';
import Diamond4 from '../../../../../assets/img/diamond4.png';
import Diamond5 from '../../../../../assets/img/diamond5.png';

function valuetext(value) {
  return `${value}`;
}

const ShapeFilter = () => {
  return (
    <div className="shape-filter">
      <div className="row">
        <span className="title">Shape</span>
      </div>
      <div className="row">
        <button className="diamond"><img src={Diamond1} alt="diamond1"/></button>
        <button className="diamond"><img src={Diamond2} alt="diamond2"/></button>
        <button className="diamond"><img src={Diamond3} alt="diamond3"/></button>
        <button className="diamond"><img src={Diamond4} alt="diamond4"/></button>
        <button className="diamond"><img src={Diamond5} alt="diamond5"/></button>
      </div>
      <div className="row">
        <button className="diamond"><img src={Diamond1} alt="diamond1"/></button>
        <button className="diamond"><img src={Diamond2} alt="diamond2"/></button>
        <button className="diamond"><img src={Diamond3} alt="diamond3"/></button>
        <button className="diamond"><img src={Diamond4} alt="diamond4"/></button>
        <button className="diamond"><img src={Diamond5} alt="diamond5"/></button>
      </div>
    </div>
  )
}

const ColorFilter = () => {
  let marks = [
    { value: 0, label: 'D' },
    { value: 1, label: 'E' },
    { value: 2, label: 'F' },
    { value: 3, label: 'G' },
    { value: 4, label: 'H' },
    { value: 5, label: 'I' },
    { value: 6, label: 'J' },
    { value: 7, label: 'K' },
    { value: 8, label: 'L' },
  ]
  return (
    <div className="color-filter">
      <div className="row title-container">
        <span className="title">Colour</span>
        <div className="range">D-L</div>
      </div>
      <div className="row">
        <Slider
          defaultValue={0}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks={marks}
          min={0}
          max={8}
        />
      </div>
    </div>
  )
}

const Filter = () => {
  return (
    <div className="Filter"> 
      <Container>
        <Row>
          <Col lg="4" md="6">
            <ShapeFilter />
          </Col>
          <Col lg="4" md="6">
            <ColorFilter />
          </Col>
          <Col lg="4" md="6">
            
          </Col>
          <Col lg="4" md="6">
            
          </Col>
          <Col lg="4" md="6">
            
          </Col>
          <Col lg="4" md="6">
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Filter;
