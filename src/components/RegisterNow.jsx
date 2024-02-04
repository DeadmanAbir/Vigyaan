import React from 'react'

function RegisterNow() {
    return (
        <div className="page-component__bg_image_box page-component__bg_image_box--dark-bg bg-custom-color bg-custom-color--dark uni-is-dark-bg" id="cta_button-01-774311">
            <div className="page-component__bg_overlay_box" style={{ backgroundColor: '#232323' }} />
            <div className="page-component__wrapper" style={{ zIndex: 14, paddingTop: '120px', paddingBottom: '120px' }}>
                <div className="cta_button-01">
                    <div className="container container--small">
                        <div className="title-box title-box--center">
                            <h2 className="heading text-white">Ready to Join the Hackathon?</h2>
                            <div className="title-box__text content_box text-white">
                                Register now and be a part of this exciting event!
                            </div>
                        </div>
                    </div>
                    <div className="container container--small">
                        <div className="cta_button-01__button_box">
                            <div className="buttons-set">
                                <ul className="buttons-set__list">
                                    <li className="buttons-set__item">
                                        <a className="button button--white-bg" onClick={()=>{
                                            const navbar = document.getElementById("hero"); 
                                            const navbarPosition = navbar.offsetTop; //pricing-02-878691
                          
                                            // Scroll to the navbar position
                                            window.scrollTo({
                                              top: navbarPosition,
                                              behavior: "smooth", // Smooth scrolling animation
                                            });
                                        }} ><span className="button__text">Register Now</span></a>
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

export default RegisterNow