import React from 'react'
import workshops from "../assets/workshops.webp"
import mentorship from "../assets/mentorship.webp"
function Plans() {
    return (
        <>
            <div className="page-component__bg_image_box bg-custom-color" id="features-06-148571">
                <div className="page-component__bg_overlay_box" style={{ backgroundColor: '#f6e3da' }} />
                <div className="page-component__wrapper" style={{ zIndex: 110, paddingTop: '80px', paddingBottom: '80px' }}>
                    <div className="features-06 graphics-image default-graphics-image">
                        <div className="container container--large">
                            <div className="features-06__wrapper">
                                <div className="features-06__main">
                                    <div className="features-06__main_content">
                                        <div className="title-box">
                                            <h2 className="heading features-06__heading">Workshops</h2>
                                            <div className="title-box__text features-06__text content_box">
                                                Learn from the experts in various fields
                                            </div>
                                        </div>
                                        <div className="buttons-set">
                                            <ul className="buttons-set__list">
                                                <li className="buttons-set__item">
                                                    <a data-stripe-product-id data-stripe-mode="payment" data-successful-payment-url data-cancel-payment-url className="button button--accent-outline" ><span className="button__text">TBA</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="features-06__visual">
                                    <div className="features-06__img_box">
                                        <img loading="lazy" className="features-06__img" alt="eWalle illustration 1" src={workshops}  sizes="(max-width: 320px) 290px,(max-width: 375px) 345px,(max-width: 425px) 395px,(max-width: 600px) 570px,(max-width: 700px) 670px,(max-width: 768px) 369px,585px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-component__bg_image_box bg-custom-color" id="features-07-645831">
                <div className="page-component__bg_overlay_box" style={{ backgroundColor: '#f6e3da' }} />
                <div className="page-component__wrapper" style={{ zIndex: 19, paddingTop: '60px', paddingBottom: '120px' }}>
                    <div className="features-07 graphics-image default-graphics-image">
                        <div className="container container--large">
                            <div className="features-07__wrapper">
                                <div className="features-07__main">
                                    <div className="features-07__main_content">
                                        <div className="title-box">
                                            <h2 className="heading features-07__heading">Mentorship</h2>
                                            <div className="title-box__text features-07__text content_box">
                                                Get guidance from industry professionals
                                            </div>
                                        </div>
                                        <div className="buttons-set" >
                                            <ul className="buttons-set__list">
                                                <li className="buttons-set__item">
                                                    <a data-stripe-product-id data-stripe-mode="payment" data-successful-payment-url data-cancel-payment-url className="button button--accent-outline" ><span className="button__text">TBA</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="features-07__visual">
                                    <div className="features-07__img_box">
                                        <img loading="lazy" className="features-07__img" alt="eWalle illustration 2" src={mentorship}  sizes="(max-width: 320px) 290px,(max-width: 375px) 345px,(max-width: 425px) 395px,(max-width: 600px) 570px,(max-width: 700px) 670px,(max-width: 768px) 369px,585px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Plans