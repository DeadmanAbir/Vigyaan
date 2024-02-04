import React from 'react'
import Srijan from "../assets/srijan.png"
import Insta from "../assets/FooterI.png"
import Fb from "../assets/FooterF.png"
import Tw from "../assets/FooterT.png"
function Footer() {
    const email="clubsrijanscience@gmail.com"
    return (
        <div className="bg-mature-color">
            <footer className="footer-04 footer-04--dark" id="footer" style={{}}>
                <div className="footer-04__top">
                    <div className="container">
                        <div className="footer-04__top_wrapper text-white">
                            <div className="footer-04__col">
                                <a className="footer-04__logo_link">
                                    <img loading="lazy" alt="Whatsapp image 2023 12 23 at 4.06.15 pm" className="footer-04__logo" height={100} src={Srijan}  sizes="100px" />
                                </a>
                                <div className="footer-04__info content_box">
                                    <p>© 2024 Srijan Science Club. All rights reserved.</p>
                                </div>
                            </div>
                            <div className="footer-04__col">
                                <h3 className="footer-04__title">Quick Links</h3>
                                <ul className="footer-04__list">
                                    <li className="footer-04__item">
                                        <a onClick={()=>{
                                            const navbar = document.getElementById("hero"); 
                                            const navbarPosition = navbar.offsetTop;
                          
                                            // Scroll to the navbar position
                                            window.scrollTo({
                                              top: navbarPosition,
                                              behavior: "smooth", // Smooth scrolling animation
                                            });
                                        }} className="footer-04__link">
                                            Home
                                        </a>
                                    </li>
                                    <li className="footer-04__item">
                                        <a  className="footer-04__link">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="footer-04__item">
                                        <a onClick={()=>{
                                            const navbar = document.getElementById("features-09-667031"); 
                                            const navbarPosition = navbar.offsetTop;
                          
                                            
                                            window.scrollTo({
                                              top: navbarPosition,
                                              behavior: "smooth", // Smooth scrolling animation
                                            });
                                        }} className="footer-04__link">
                                            Hackathon
                                        </a>
                                    </li>
                                    <li className="footer-04__item">
                                        <a href={`mailto:${email}`} className="footer-04__link">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-04__col">
                                <h3 className="footer-04__title">Resources</h3>
                                <ul className="footer-04__list">
                                    <li className="footer-04__item">
                                        <a onClick={()=>{
                                            const navbar = document.getElementById("faq-01-873421");  
                                            const navbarPosition = navbar.offsetTop; 
                          
                                            window.scrollTo({
                                              top: navbarPosition,
                                              behavior: "smooth", 
                                            });
                                        }} className="footer-04__link">
                                            FAQs
                                        </a>
                                    </li>
                                    <li className="footer-04__item">
                                        <a onClick={()=>{
                                            const navbar = document.getElementById("pricing-02-878691");  //faq-01-873421
                                            const navbarPosition = navbar.offsetTop; 
                          
                                            window.scrollTo({
                                              top: navbarPosition,
                                              behavior: "smooth", 
                                            });
                                        }}  className="footer-04__link">
                                            Sponsorship
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="footer-04__col">
                                <h3 className="footer-04__title">Follow Us</h3>
                                <div className="footer-04__social_box">
                                    <div className="social-buttons social-buttons--left">
                                        <ul className="social-buttons__list">
                                            <li className="social-buttons__item">
                                                <a className="social-buttons__link social-buttons__link--facebook" ><img loading="lazy" className="social-buttons__icon" alt="facebook icon" src={Fb} /></a>
                                            </li>
                                            <li className="social-buttons__item">
                                                <a className="social-buttons__link social-buttons__link--twitter" ><img loading="lazy" className="social-buttons__icon" alt="twitter icon" src={Tw} /></a>
                                            </li>
                                            <li className="social-buttons__item">
                                                <a className="social-buttons__link social-buttons__link--instagram" href="https://www.instagram.com/srijan_science_club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank"><img loading="lazy" className="social-buttons__icon" alt="instagram icon" src={Insta} /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer