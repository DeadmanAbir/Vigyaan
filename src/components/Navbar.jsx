import React from 'react'
import logo from "../assets/sceince club.png"
function Navbar() {
    return (
        <nav id="uni-navigation-bar" className="js-nav nav-02" >
            <div className="container container--large">
                <div className="nav-02__box">
                    <div className="nav-02__logo"  >
                        <a className="nav-02__link">
                            <img className="nav-02__logo_img" height="100px" alt="Sceince club" src={logo}   />
                        </a>
                    </div>
                    <div className="nav-02__links js-menu">
                        <div className="nav-02__list_wrapper">
                            <ul className="nav-02__list nav-02__list--desktop">
                                <li className="nav-02__item">
                                    <a className="button button--black-outline button--empty"><span className="button__text">Home</span>
                                    </a>
                                </li>
                                <li className="nav-02__item">
                                    <a className="button button--black-outline button--empty" ><span className="button__text">About Us</span>
                                    </a>
                                </li>
                                <li className="nav-02__item">
                                    <a className="button button--black-outline button--empty"><span className="button__text">Hackathon</span>
                                    </a>
                                </li>
                                <li className="nav-02__item">
                                    <a className="button button--black-outline button--empty" ><span className="button__text">Contact</span>
                                    </a>
                                </li>
                                <li className="nav-02__item">
                                    <div className="buttons-set">
                                        <ul className="buttons-set__list">
                                            <li className="buttons-set__item">
                                                <a data-stripe-product-id data-stripe-mode="payment" data-successful-payment-url data-cancel-payment-url className="button button--accent-outline"><span className="button__text">Apply With Devfolio</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <ul className="nav-02__list nav-02__list--mobile">
                                <li className="nav-02__item">
                                    <a  className="button button--black-outline button--empty" ><span className="button__text">Home</span>
                                    </a>
                                </li>
                                <li className="nav-02__item">
                                    <a className="button button--black-outline button--empty" ><span className="button__text">About Us</span>
                                    </a>
                                </li>
                                <li className="nav-02__item">
                                    <a className="button button--black-outline button--empty"><span className="button__text">Hackathon</span>
                                    </a>
                                </li>
                                <li className="nav-02__item">
                                    <a className="button button--black-outline button--empty" ><span className="button__text">Contact</span>
                                    </a>
                                </li>
                                <li className="nav-02__item">
                                    <div className="buttons-set">
                                        <ul className="buttons-set__list">
                                            <li className="buttons-set__item" >
                                                <a data-stripe-product-id data-stripe-mode="payment" data-successful-payment-url data-cancel-payment-url className="button button--accent-outline" ><span className="button__text">Apply With Devfolio</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-02__burger">
                            <button className="burger burger--black js-open-menu" type="button">
                                <div className="burger__box">
                                    <div className="burger__inner" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar