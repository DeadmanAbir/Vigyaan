import React from 'react'
import TBA from "../assets/tba.png"
function Partners() {
    const email="clubsrijanscience@gmail.com"
    return (
        <div className="page-component__bg_image_box bg-custom-color" id="clients-03-34861">
            <div className="page-component__bg_overlay_box" style={{ backgroundColor: '#f6e3da' }} />
            <div className="page-component__wrapper" style={{ zIndex: 112, paddingTop: '40px', paddingBottom: '100px' }}>
                <div className="clients-03">
                    <div className="container container--small">
                        <div className="title-box title-box--center">
                            <h2 className="heading">Our Partners</h2>
                            <div className="title-box__text content_box">
                                We are grateful for the support of our partners
                            </div>
                        </div>
                    </div>
                    <div className="container container--mid">
                        <ul className="clients-03__list">
                            <li className="clients-03__item">
                                <span className="clients-03__img_box">
                                    <img loading="lazy" alt="To Be Announced" className="clients-03__logo" height={85} src={TBA}  sizes="88px" />
                                </span>
                            </li>
                        </ul>
                        <div className="bottom_cta">
                            <div className="buttons-set">
                                <ul className="buttons-set__list">
                                    <li className="buttons-set__item">
                                        <a href={`mailto:${email}`} className="button button--accent-outline" ><span className="button__text">Become a Partner</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Partners