import React, {useState, useEffect} from 'react'
import './Product.scss'
import Slider from "react-slick";
import Product_1 from '../../../assets/img/1.jpg'
import Product_2 from '../../../assets/img/2.jpg'
import Product_3 from '../../../assets/img/3.jpg'
import Product_4 from '../../../assets/img/4.jpg'
import Product_5 from '../../../assets/img/5.png'
import Product_6 from '../../../assets/img/6.png'
import Product_Info from '../../../assets/img/product_info.png'

import IconShipping from '@material-ui/icons/LocalShippingOutlined'

var settingsGallery = {
    slidesToShow: 5,
    slidesToScroll: 1,
    // asNavFor: '.slider-thumbnail',
    infinite: true,
    dots: false,
    focusOnSelect: true
}
var settingsThumbnail = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // asNavFor: '.slider-gallery',
    infinite: true,
    dots: false,
}

const Product = (data) => {

    const [thumbNailCompo, setThumbNailCompo] = useState(null)
    const [galleryCompo, setGalleryCompo] = useState(null)


    return (
        <>
            <div className="product">
                <div className="product-container">
                    <div className="product-image">
                        <div className="image-container">
                            <Slider 
                                {...settingsThumbnail} 
                                className="slick-thumbnail" 
                                ref={slider => setThumbNailCompo(slider)}
                                asNavFor={galleryCompo}
                            >
                                <div className="image"><img src={Product_1} /></div>
                                <div className="image"><img src={Product_2} /></div>
                                <div className="image"><img src={Product_3} /></div>
                                <div className="image"><img src={Product_4} /></div>
                                <div className="image"><img src={Product_5} /></div>
                                <div className="image"><img src={Product_6} /></div>
                            </Slider>
                            <div className="image-text">
                                Steven Stone Engraving for illustration purposes only.<br/>
                                <span>New:</span> You can now choose your own engraving
                            </div>
                        </div>
                        <div className="image-gallery">
                            <Slider 
                                {...settingsGallery} 
                                className="slick-gallery" 
                                ref={slider => setGalleryCompo(slider)}
                                asNavFor={thumbNailCompo}
                            >
                                <div className="image-wrapper">
                                    <div className="image"><img src={Product_1} /></div>
                                </div>
                                <div className="image-wrapper">
                                    <div className="image"><img src={Product_2} /></div>
                                </div>
                                <div className="image-wrapper">
                                    <div className="image"><img src={Product_3} /></div>
                                </div>
                                <div className="image-wrapper">
                                    <div className="image"><img src={Product_4} /></div>
                                </div>
                                <div className="image-wrapper">
                                    <div className="image"><img src={Product_5} /></div>
                                </div>
                                <div className="image-wrapper">
                                    <div className="image"><img src={Product_6} /></div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="product-detail">
                        <div className="link">Home  •  EMGAGEMENT RINGS</div>
                        <div className="detail-title">
                            <div>18k Rose Gold Classic Wedfit</div>
                            <div>
                                <span className="price">£569.00</span>
                                <span>(Setting Price)</span>
                            </div>
                        </div>
                        <div className="order">
                            <IconShipping />
                            <div>
                                Order in <span className="red">4 hours 3 mins and 30 secs</span><br/>
                                for your order to ship by Thursday, October 22.
                            </div>
                        </div>
                        <div className="button-group">
                            <div className="button">Book A Consultation</div>
                            <div className="button active">Choose A Diamond</div>
                        </div>
                        <div className="property">
                            <select id="Finger">
                                <option value="0">Finger Size</option>
                                <option value="1">Size1</option>
                                <option value="2">Size2</option>
                                <option value="3">Size3</option>
                            </select>
                        </div>
                        <div className="product-info">
                            <div className="category">
                                <div className="item active">Product Details</div>
                                <div className="item">Packaging</div>
                                <div className="item">Finance Information</div>
                                <div className="item">Shipping & Returns</div>
                            </div>
                            <div className="detail">
                                <div className="detail-text">
                                    A four claw solitaire style engagement ring. The ring is set in 18ct rose gold and features a round brilliant diamond. This setting is suitable for a round brilliant diamond between 0.18ct and 2.00ct. If you were to require this design to feature a larger diamond, then please do contact us.<br/>
                                    Reference: PRS0004
                                </div>
                                <div className="detail-content">
                                    <div className="content-text">
                                        <div><span>18ct Rose Gold</span></div>
                                        <div><span>Solitaire</span></div>
                                        <div><span>Round Brilliant</span></div>
                                    </div>
                                    <div className="content-image">
                                        <img alt="product" src={Product_Info} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;