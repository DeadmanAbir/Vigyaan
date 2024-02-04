import React from 'react'
import hack from "../assets/hack.png"
function Hero() {
    return (
        <div className="page-component__bg_image_box bg-custom-color first_component" id="hero">
            <div className="page-component__bg_overlay_box" style={{ backgroundColor: '#f6e3da' }} />
            <div className="page-component__wrapper" style={{ zIndex: 113, paddingTop: '120px', paddingBottom: '80px' }}>
                <header className="header-39 graphics-image default-graphics-video">
                    <div className="container container--mid header-39__container">
                        <div className="header-39__text_box">
                            <h1 className="heading" style={{fontSize: "40px"}}>Welcome to Vigyaan</h1>
                            <div className="content_box">
                                24 Hours Hackathon by <span style={{fontWeight: "bolder"}}>Srijan Science Club of GGSIPU</span>
                            </div>
                        </div>
                        <div className="header-39__buttons" style={{width: "fitContent"}}>
                            <div className="buttons-set" >
                                <ul className="buttons-set__list">
                                    <li className="buttons-set__item">
                                        <a data-stripe-product-id data-stripe-mode="payment" data-successful-payment-url data-cancel-payment-url className="button button--accent-outline" ><span className="button__text">Apply With Devfolio</span></a>
                                    </li>
                                </ul>
                                <div className="content_box cta_bottom_info">
                                    Join us for an exciting 24 hours of innovation and creativity!
                                </div>
                            </div>
                        </div>
                        <img className="header-39__image" alt="Hack" src={hack}  sizes="(max-width: 320px) 272px,(max-width: 375px) 273px,(max-width: 425px) 272px,(max-width: 600px) 273px,(max-width: 768px) 455px,455px" />
                    </div>
                </header>
            </div>
        </div>

    )
}

export default Hero