import React from 'react'
import Rinki from "../assets/Rinki Vice President.jpg"
import Harshit from "../assets/Harshit President.jpg"
import Yash from "../assets/Yash Technical Head.jpg"
import Kartik from "../assets/Kartik Media Head.jpg"
import Linkedln from "../assets/linkedln.png"
function Teams() {
    return (
        <div className="page-component__bg_image_box bg-custom-color" id="team-02-96441">
            <div className="page-component__bg_overlay_box" style={{ backgroundColor: '#f6e3da' }} />
            <div className="page-component__wrapper" style={{ zIndex: 11, paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="team-02">
                    <div className="container container--small">
                        <div className="title-box title-box--center">
                            <h2 className="heading">Meet the Team</h2>
                            <div className="title-box__text content_box">
                                Meet the dedicated team behind Vigyaan
                            </div>
                        </div>
                    </div>
                    <div className="container container--xlarge">
                        <ul className="team-02__list">
                            <li className="team-02__person">
                                <div className="team-02__person_box">
                                    <div className="team-02__person_img_box">
                                        <img loading="lazy" className="team-02__person_img" alt="" src={Harshit}  sizes="100px" />
                                    </div>
                                    <div className="team-02__person_name">Harshit Mittal</div>
                                    <div className="team-02__person_tag">
                                        <span className="tag color-main bg-light">
                                            <span className="tag__text" style={{ color: "white" }}> President </span>
                                        </span>
                                    </div>
                                    <div className="team-02__person_about content_box">
                                        Harshit Mittal is the President of Srijan Science Club of GGSIPU.
                                    </div>
                                    <div className="team-02__person_social">
                                        <div className="social-buttons">
                                            <ul className="social-buttons__list">
                                                <li className="social-buttons__item">
                                                    <a className="social-buttons__link social-buttons__link--linkedin" href="https://www.linkedin.com/in/-harshitmittal/" target="_blank"><img loading="lazy" className="social-buttons__icon" alt="linkedin icon" src={Linkedln} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="team-02__person">
                                <div className="team-02__person_box">
                                    <div className="team-02__person_img_box">
                                        <img
                                            loading="lazy"
                                            className="team-02__person_img"
                                            alt=""
                                            src={Rinki}
                                            sizes="100px"
                                        /> </div>
                                    <div className="team-02__person_name">Rinki</div>
                                    <div className="team-02__person_tag">
                                        <span className="tag color-main bg-light">
                                            <span className="tag__text" style={{ color: "white" }}> Vice President </span>
                                        </span>
                                    </div>
                                    <div className="team-02__person_about content_box">
                                        Rinki, pursuing Btech in Chemical Engineering, is the Vice President of Srijan Science Club of GGSIPU.
                                    </div>
                                    <div className="team-02__person_social">
                                        <div className="social-buttons">
                                            <ul className="social-buttons__list">
                                                <li className="social-buttons__item">
                                                    <a className="social-buttons__link social-buttons__link--linkedin" href="https://www.linkedin.com/in/rinki-lodhi-4b75b3228/" target="_blank"><img loading="lazy" className="social-buttons__icon" alt="linkedin icon" src={Linkedln} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="team-02__person">
                                <div className="team-02__person_box">
                                    <div className="team-02__person_img_box">
                                        <img loading="lazy" className="team-02__person_img" alt="" src={Kartik} sizes="100px" />
                                    </div>
                                    <div className="team-02__person_name">Kartik</div>
                                    <div className="team-02__person_tag">
                                        <span className="tag color-main bg-light">
                                            <span className="tag__text" style={{ color: "white" }}> Media Head</span>
                                        </span>
                                    </div>
                                    <div className="team-02__person_about content_box">
                                        Kartik is responsible for all the media related events and activities.
                                    </div>
                                    <div className="team-02__person_social">
                                        <div className="social-buttons">
                                            <ul className="social-buttons__list">
                                                <li className="social-buttons__item">
                                                    <a className="social-buttons__link social-buttons__link--linkedin" href="https://www.linkedin.com/in/kartik-garg-99a754252/" target="_blank"><img loading="lazy" className="social-buttons__icon" alt="linkedin icon" src={Linkedln} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="team-02__person">
                                <div className="team-02__person_box">
                                    <div className="team-02__person_img_box">
                                        <img loading="lazy" className="team-02__person_img" alt="" src={Yash}  sizes="100px" />
                                    </div>
                                    <div className="team-02__person_name">Yash</div>
                                    <div className="team-02__person_tag">
                                        <span className="tag color-main bg-light">
                                            <span className="tag__text" style={{ color: "white" }}> Technical Head</span>
                                        </span>
                                    </div>
                                    <div className="team-02__person_about content_box">
                                        Yash is the technical head of Srijan Science Club of GGSIPU.
                                    </div>
                                    <div className="team-02__person_social">
                                        <div className="social-buttons">
                                            <ul className="social-buttons__list">
                                                <li className="social-buttons__item">
                                                    <a className="social-buttons__link social-buttons__link--linkedin" href="https://www.linkedin.com/in/yash-gupta-73b9281b1" target="_blank"><img loading="lazy" className="social-buttons__icon" alt="linkedin icon" src={Linkedln} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Teams