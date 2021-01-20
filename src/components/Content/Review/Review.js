import React from 'react'
import './Review.scss'

import ImgRing from '../../../assets/img/review-ring.jpg';
import ImgDiamond from '../../../assets/img/review-diamond.png';
import IconKlarna from '../../../assets/img/klarna.png';
import IconVisa from '../../../assets/img/payment_visa.png';
import IconMaster from '../../../assets/img/payment_master.png';
import IconCard from '../../../assets/img/payment_card.png';
import IconBank from '../../../assets/img/payment_bank.png';
import ArrowIcon from '../../../assets/img/arrow.png';

import IconPen from '@material-ui/icons/BorderColorOutlined';
import IconShipping from '@material-ui/icons/LocalShippingOutlined';

const Review = () => {
  return (
    <>
      <div className="Review">
        <div className="arrow">
            <img alt="arrow" src={ArrowIcon} />
        </div>
        <div className="container">
          <div className="review-title">
            Review Your Design
          </div>
          <div className="review-content">
            <div className="content">
              <div className="content-title">Ring Details</div>
              <div className="content-img">
                <img alt="ring" src={ImgRing} className="ring-img" />
              </div>
              <div className="content-other">
                <div className="content-detail">
                  <div className="detail-title">
                    Diamond Set Lotus
                    <span>£530.00</span>
                  </div>
                  <div className="detail-text">
                    <div>Design ID: PRS0516</div>
                    <div>Metal: Platinum</div>
                    <div>Style: Shoulder Set</div>
                    <div>Shape: Princess Cut</div>
                    <div>
                      Finger Size:  
                      <select className="select">
                        <option>Please select</option>
                        <option>Size 1</option>
                        <option>Size 2</option>
                      </select>
                    </div>
                    <div>
                      Add Engraving:  
                      <select className="select">
                        <option>None</option>
                        <option>Size 1</option>
                        <option>Size 2</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="content-edit">
                  <IconPen />
                  <span className="underline">change ring design</span>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="content-title">Diamond Details</div>
              <div className="content-img">
                <img alt="diamond" src={ImgDiamond} className="diamond-img" />
              </div>
              <div className="content-other">
                <div className="content-detail">
                  <div className="detail-title">
                    1.00c Round Diamond
                    <span> £261.98</span>
                  </div>
                  <div className="detail-text">
                    <div>Stock Number: RBPUIFSFG</div>
                    <div>Carat: 1.00ct</div>
                    <div>Colour: H</div>
                    <div>Clarity: VS1</div>
                    <div>Polish: Very Good</div>
                    <div>Symmetry: Excellent</div>
                    <div>Cut: Excellent</div>
                    <div>Fluorescence: Medium</div>
                    <div>Measure (mm): 3.70 x 3.69 x 2.21</div>
                    <div className="underline">Certificate: GIA 6321993250</div>
                  </div>
                </div>
                <div className="content-edit">
                  <IconPen />
                  <span className="underline">change ring design</span>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="content-title">Order Summary</div>
              <div className="subcontent">
                <div className="subcontent-title">Ring Details</div>
                <div className="subcontent-text">
                  <div>Platinum Simplicity with Round, 0.18ct, I Colour, SI1 Clarity - GIA 46745876</div>
                  <div className="small">
                    Ring Size
                    <select className="select">
                      <option>Please select</option>
                      <option>Size 1</option>
                      <option>Size 2</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="subcontent">
                <div className="subcontent-title">Shipping<IconShipping /></div>
                <div className="subcontent-text">
                  <div>Order in <span className="red">4 hours 3 mins and 30 secs</span> for your order to ship by Thursday, October 22.</div>
                  <div className="small">Free Shipping, Hassle-Free Returns</div>
                  <div className="small">Need it sooner? Contact Us on 0800 080 3535 or <span className="underline">open online chat</span></div>
                </div>
              </div>
              <div className="subcontent">
                <div className="subcontent-title">Payment options</div>
                <div className="item-group">
                  <div className="subcontent-item">
                    <div className="subcontent-image">
                      <img alt="klara" src={IconKlarna} />
                    </div>
                    <div >Pay with finance</div>
                    <div className="grey">From £200/mo.</div>
                  </div>
                  <div className="subcontent-item">or</div>
                  <div className="subcontent-item">
                    <div className="subcontent-image">
                      <img alt="bank" src={IconBank} />
                      <img alt="master" src={IconMaster} />
                      <img alt="card" src={IconCard} />
                      <img alt="visa" src={IconVisa} />
                    </div>
                    <div >Pay in full</div>
                    <div className="grey">£14500</div>
                  </div>
                </div>
                <div className="small underline">Finance Calculator</div>
                <div className="small">Payment options are selected at the checkout</div>
                <div className="button">Buy Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review