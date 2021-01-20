import React from 'react';
import './SelectStone.scss';
import { Tabs, Tab } from 'react-bootstrap';
import ArrowIcon from '../../../assets/img/arrow.png';
import NaturalDiamonds from './NaturalDiamonds/NaturalDiamonds';


const SelectStone = () => {
  return (
    <div className="SelectStone">
      <div className="section-title">
        <div>
          <img alt="arrow" src={ArrowIcon} />
        </div>
        <div className="title">Select A Stone</div>
        <div className="description">Choose from 30,099 diamonds and gemstones</div>
      </div>

      <div className="section-content">
        <Tabs transition={false} defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Natural Diamond">
            <NaturalDiamonds />
          </Tab>
          <Tab eventKey="profile" title="Lab Created">
            <h2>Lab Created</h2>
          </Tab>
          <Tab eventKey="gemstones" title="Gemstones">
            <h2>Gemstones</h2>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default SelectStone;
