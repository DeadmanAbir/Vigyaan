import React from 'react'
import Gold from "../assets/gold.png";
import Silver from "../assets/silver.png";
import Bronze from "../assets/bronze.png";
function Sponsors() {
    const email="clubsrijanscience@gmail.com"
    return (
        <div className="page-component__bg_image_box bg-custom-color" id="pricing-02-878691">
            <div className="page-component__bg_overlay_box" style={{ backgroundColor: '#f6e3da' }} />
            <div className="page-component__wrapper" style={{ zIndex: 15, paddingTop: '50px', paddingBottom: '100px' }}>
                <div className="pricing-02">
                    <div className="container container--small">
                        <div className="title-box title-box--center">
                            <h2 className="heading">Sponsorship Packages</h2>
                            <div className="title-box__text content_box">
                                Support our hackathon and gain visibility for your brand
                            </div>
                        </div>
                    </div>
                    
                    <div className="container">
                        <div className="pricing-02__cards_container">
                            <ul className="pricing-02__cards_list">
                                <li className="pricing-02__card_box">
                                    <div className="pricing-02__card">
                                        <img loading="lazy" src={Bronze} className="pricing-02__card_img" />
                                        <h3 className="pricing-02__card_title">Bronze Sponsor</h3>
                                        <div className="pricing-02__card_info">
                                            Logo on website, mention in opening remarks
                                        </div>
                                        <div className="pricing-02__price_box">
                                            <div className="pricing-02__price_item js-tab-content state-active-tab" data-index="monthly-price-1" data-group="my-pricing-pricing-02-878691">
                                                <div className="pricing-02__price_symbol">$</div>
                                                <div className="pricing-02__price">
                                                    <span className="pricing-02__price_text smaller-text-09">500</span>
                                                </div>
                                                <div className="pricing-02__period">Event</div>
                                            </div>
                                            <div className="pricing-02__price_item js-tab-content" data-index="yearly-price-1" data-group="my-pricing-pricing-02-878691">
                                                <div className="pricing-02__price_symbol">$</div>
                                                <div className="pricing-02__price">
                                                    <span className="pricing-02__price_text smaller-text-09">400</span>
                                                </div>
                                                <div className="pricing-02__period">Early Bird</div>
                                            </div>
                                        </div>
                                        <ul className="pricing-02__info">
                                            <li className="pricing-02__info_item">
                                                <div className="pricing-02__info_item_box">
                                                    <div className="pricing-02__info_item_text">
                                                        Logo on Website
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="pricing-02__info_item">
                                                <div className="pricing-02__info_item_box">
                                                    <div className="pricing-02__info_item_text">
                                                        Mention in Opening Remarks
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>

                                    </div>
                                </li>
                                <li className="pricing-02__card_box">
                                    <div className="pricing-02__card">
                                        <img loading="lazy" src={Silver} className="pricing-02__card_img" />
                                        <h3 className="pricing-02__card_title">Silver Sponsor</h3>
                                        <div className="pricing-02__card_info">
                                            Logo on website, mention in opening remarks, logo on event
                                            banner
                                        </div>
                                        <div className="pricing-02__price_box">
                                            <div className="pricing-02__price_item js-tab-content state-active-tab" data-index="monthly-price-1" data-group="my-pricing-pricing-02-878691">
                                                <div className="pricing-02__price_symbol">$</div>
                                                <div className="pricing-02__price">
                                                    <span className="pricing-02__price_text smaller-text-08">1000</span>
                                                </div>
                                                <div className="pricing-02__period">Event</div>
                                            </div>
                                            <div className="pricing-02__price_item js-tab-content" data-index="yearly-price-1" data-group="my-pricing-pricing-02-878691">
                                                <div className="pricing-02__price_symbol">$</div>
                                                <div className="pricing-02__price">
                                                    <span className="pricing-02__price_text smaller-text-09">800</span>
                                                </div>
                                                <div className="pricing-02__period">Early Bird</div>
                                            </div>
                                        </div>
                                        <ul className="pricing-02__info">
                                            <li className="pricing-02__info_item">
                                                <div className="pricing-02__info_item_box">
                                                    <div className="pricing-02__info_item_text">
                                                        Logo on Website
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="pricing-02__info_item">
                                                <div className="pricing-02__info_item_box">
                                                    <div className="pricing-02__info_item_text">
                                                        Mention in Opening Remarks
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="pricing-02__info_item">
                                                <div className="pricing-02__info_item_box">
                                                    <div className="pricing-02__info_item_text">
                                                        Logo on Event Banner
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>

                                    </div>
                                </li>
                                <li className="pricing-02__card_box pricing-02__card_box--accent">
                                    <div className="pricing-02__card">
                                        <img loading="lazy" src={Gold} className="pricing-02__card_img" />
                                        <h3 className="pricing-02__card_title">Gold Sponsor</h3>
                                        <div className="pricing-02__card_info">
                                            Logo on website, mention in opening remarks, logo on event
                                            banner, booth at event
                                        </div>
                                        <div className="pricing-02__price_box">
                                            <div className="pricing-02__price_item js-tab-content state-active-tab" data-index="monthly-price-1" data-group="my-pricing-pricing-02-878691">
                                                <div className="pricing-02__price_symbol">$</div>
                                                <div className="pricing-02__price">
                                                    <span className="pricing-02__price_text smaller-text-08">2000</span>
                                                </div>
                                                <div className="pricing-02__period">Event</div>
                                            </div>
                                            <div className="pricing-02__price_item js-tab-content" data-index="yearly-price-1" data-group="my-pricing-pricing-02-878691">
                                                <div className="pricing-02__price_symbol">$</div>
                                                <div className="pricing-02__price">
                                                    <span className="pricing-02__price_text smaller-text-08">1600</span>
                                                </div>
                                                <div className="pricing-02__period">Early Bird</div>
                                            </div>
                                        </div>
                                        <ul className="pricing-02__info">
                                            <li className="pricing-02__info_item">
                                                <div className="pricing-02__info_item_box">
                                                    <div className="pricing-02__info_item_text">
                                                        Logo on Website
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="pricing-02__info_item">
                                                <div className="pricing-02__info_item_box">
                                                    <div className="pricing-02__info_item_text">
                                                        Mention in Opening Remarks
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="pricing-02__info_item">
                                                <div className="pricing-02__info_item_box">
                                                    <div className="pricing-02__info_item_text">
                                                        Logo on Event Banner
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="pricing-02__info_item">
                                                <div className="pricing-02__info_item_box">
                                                    <div className="pricing-02__info_item_text">
                                                        Booth at Event
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>

                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="bottom_cta" />
                    <div className="pricing-02__card_button" style={{marginTop : "50px"}}>
                        <a  className="button button--accent-outline" href={`mailto:${email}`} ><span className="button__text">Become a Sponsor</span></a>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Sponsors