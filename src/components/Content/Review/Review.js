import React, { useState, useEffect } from 'react'
import './Review.scss'

import ImgRing from '../../../assets/img/review-ring.jpg';
import ImgDiamond from '../../../assets/img/review-diamond.png';

const Review = (data) => {
    return (
        <>
            <div className="review">
                <div className="container">
                    <div className="review-title">
                        Review Your Design
                    </div>
                    <div className="review-content">
                        <div className="content">
                            <div className="content-title">Ring Details</div>
                            <div className="content-img">
                                <img src={ImgRing} className="ring-img" />
                            </div>
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
                                    <div>Finger Size:    </div>
                                    <div>Add Engraving:    </div>
                                </div>
                            </div>
                            <div className="content-edit">
                                change ring design
                            </div>
                        </div>
                        <div className="content">
                            <div className="content-title">Diamond Details</div>
                            <div className="content-img">
                                <img src={ImgDiamond} className="diamond-img" />
                            </div>
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
                                <span className="underline">change ring design</span>
                            </div>
                        </div>
                        <div className="content">
                            <div className="content-title">Order Summary</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review