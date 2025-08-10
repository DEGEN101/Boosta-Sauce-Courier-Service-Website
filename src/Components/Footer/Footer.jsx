import "./Footer.css"

import phoneIcon from "../../Assets/Icons/phone-svgrepo-com.svg";
import emailIcon from "../../Assets/Icons/email-open-svgrepo-com.svg";
import whatsappIcon from "../../Assets/Icons/whatsapp-logo-svgrepo-com.svg";


const Footer = () => {
    return (
        <>
            <article className="footer-container">
                <section className="footer-main">
                    <section className="logo-section">
                        <h1> Boosta Sauce Logistics </h1>
                        <p> 
                            You can never stop with one.
                        </p>
                    </section>
                    
                    <section className="navigation-section">
                        <h3> Company </h3>
                        <nav>
                            <ul className="footer-navigation">
                                <li>
                                    <a href="#/home" className="navigation-link">Home</a>
                                </li>
                                <li>
                                    <a href="#/services" className="navigation-link">Services</a>
                                </li>
                                <li>
                                    <a href="#/contact" className="navigation-link">Contact Us</a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                    
                    <section className="contact-section">
                        <h3> Contact Us </h3>
                        <ul>
                            <li className="contact-item">
                                <img src={phoneIcon} alt="Icon of phone" className="footer-icon" />
                                <p> (+27) 676953702 </p>
                            </li>
                            <li className="contact-item">
                                <img src={emailIcon} alt="Icon of email" className="footer-icon" />
                                <p> boostasauce@outlook.com </p>
                            </li>
                        </ul>
                    </section>

                    <section className="socials-section">
                        <h3> Socials </h3>
                        <ul>
                            <li className="contact-item">
                                <img src={whatsappIcon} alt="Icon of WhatsApp logo" className="footer-icon" />
                                <a href=" https://wa.me/+27676953702" className="social-media-link">WhatsApp</a> 
                            </li>
                        </ul>
                    </section>
                </section>

                <section className="copyright-section">
                    <p> &copy; 2024 MyCourier. All rights reserved </p>
                </section>
            </article>
        </>
    );
}

export default Footer;
