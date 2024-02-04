import React from 'react'
import Srijan from "../assets/srijan.png"
import IPU from "../assets/IPU Logo.png"
function Explore() {
    return (
        <div className="page-component__bg_image_box bg-custom-color" id="links-01-773161">
            <div className="page-component__bg_overlay_box" style={{ backgroundColor: '#f6e3da' }} />
            <div className="page-component__wrapper" style={{ zIndex: 12, paddingTop: '50px', paddingBottom: '120px' }}>
                <div className="links-01">
                    <div className="container container--small">
                        <div className="title-box title-box--center">
                            <h2 className="heading">Explore More</h2>
                            <div className="title-box__text content_box">
                                Discover more sections of our website
                            </div>
                        </div>
                    </div>
                    <div className="container container--small">
                        <ul className="links-01__list">
                            <li className="links-01__item">
                                <a className="links-01__link" href="https://www.instagram.com/srijan_science_club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank">
                                    <div className="links-01__img_box">
                                        <img loading="lazy" className="links-01__img" alt="Whatsapp image 2023 12 23 at 4.06.15 pm" src={Srijan}  sizes="(max-width: 500px) 10px,500px" />
                                    </div>
                                    <div className="links-01__text_box">
                                        <div className="links-01__text_title">About Us</div>
                                        <div className="links-01__text_date">
                                            Learn about the mission and vision of Srijan Science Club
                                        </div>
                                    </div>
                                    <div className="links-01__pseudo-button bg-light">
                                        <span className="icon">
                                            <svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.823 4.164L8.954.182a.592.592 0 0 0-.854 0 .635.635 0 0 0 0 .88l2.836 2.92H.604A.614.614 0 0 0 0 4.604c0 .344.27.622.604.622h10.332L8.1 8.146a.635.635 0 0 0 0 .88.594.594 0 0 0 .854 0l3.869-3.982a.635.635 0 0 0 0-.88z" fillRule="nonzero" fill="#00396B" className="fill-main" />
                                            </svg>
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li className="links-01__item">
                                <a className="links-01__link" href="http://www.ipu.ac.in/" target="_blank">
                                    <div className="links-01__img_box">
                                        <img loading="lazy" className="links-01__img" alt="Ipu logo" src={IPU}  sizes="(max-width: 400px) 12px,566px" />
                                    </div>
                                    <div className="links-01__text_box">
                                        <div className="links-01__text_title">Our University</div>
                                        <div className="links-01__text_date">
                                            Explore the academic excellence of GGSIPU
                                        </div>
                                    </div>
                                    <div className="links-01__pseudo-button bg-light">
                                        <span className="icon">
                                            <svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.823 4.164L8.954.182a.592.592 0 0 0-.854 0 .635.635 0 0 0 0 .88l2.836 2.92H.604A.614.614 0 0 0 0 4.604c0 .344.27.622.604.622h10.332L8.1 8.146a.635.635 0 0 0 0 .88.594.594 0 0 0 .854 0l3.869-3.982a.635.635 0 0 0 0-.88z" fillRule="nonzero" fill="#00396B" className="fill-main" />
                                            </svg>
                                        </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="bottom_cta" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Explore