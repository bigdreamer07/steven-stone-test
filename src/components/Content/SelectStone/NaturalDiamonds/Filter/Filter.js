import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

import { Container, Row, Col } from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Tooltip from '@material-ui/core/Tooltip';

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
    <div className="range-filter">
      <div className="row title-container">
        <span className="title">Colour <InfoOutlinedIcon className="title-icon" /></span>
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

const CutFilter = () => {
  let marks = [
    { value: 0, label: 'excellent' },
    { value: 1, label: 'very good' },
    { value: 2, label: 'good' },
    { value: 3, label: 'fair' },
  ]
  return (
    <div className="range-filter">
      <div className="row title-container">
        <span className="title">Cut <InfoOutlinedIcon className="title-icon" /></span>
        <div className="range">Ex-F</div>
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
          max={3}
        />
      </div>
    </div>
  )
}

const CaratFilter = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
  };

  return (
    <div className="range-filter">
      <div className="row title-container">
        <span className="title">Carat <InfoOutlinedIcon className="title-icon" /></span>
        <div className="range">0.18-12.00</div>
      </div>
      <div className="row">
        <Slider
          value={value} 
          onChange={handleChange} 
          min={0.18}
          max={12}
          step={0.1}
          aria-labelledby="continuous-slider"
          ValueLabelComponent={ValueLabelComponent}
        />
        <div className="filter-bottom-label">
          <span className="filter-label">0.18</span>
          <span className="filter-label">12.00</span>
        </div>
      </div>
    </div>
  )
}

const ClarityFilter = () => {
  let marks = [
    { value: 0, label: 'Sl1' },
    { value: 1, label: 'VS2' },
    { value: 2, label: 'VS1' },
    { value: 3, label: 'VVS2' },
    { value: 4, label: 'VVS1' },
    { value: 5, label: 'IF' },
  ]
  return (
    <div className="range-filter">
      <div className="row title-container">
        <span className="title">Clarity <InfoOutlinedIcon className="title-icon" /></span>
        <div className="range">SI1-IF</div>
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
          max={5}
        />
      </div>
    </div>
  )
}

const PriceFilter = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value + " £"}>
        {children}
      </Tooltip>
    );
  }

  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
  };

  return (
    <div className="range-filter">
      <div className="row title-container">
        <span className="title">Price <InfoOutlinedIcon className="title-icon" /></span>
        <div className="range">£10-£462,362.00</div>
      </div>
      <div className="row">
        <Slider
          value={value} 
          onChange={handleChange} 
          min={0}
          max={46236200}
          aria-labelledby="continuous-slider"
          ValueLabelComponent={ValueLabelComponent}
        />
        <div className="filter-bottom-label">
          <span className="filter-label">£10</span>
          <span className="filter-label">£462,362.00</span>
        </div>
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
            <CutFilter />
          </Col>
          <Col lg="4" md="6">
            <CaratFilter />
          </Col>
          <Col lg="4" md="6">
            <ClarityFilter />
          </Col>
          <Col lg="4" md="6">
            <PriceFilter />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Filter;
