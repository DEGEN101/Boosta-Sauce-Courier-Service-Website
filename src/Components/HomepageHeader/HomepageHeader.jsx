import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button.jsx";

import burgerIcon from "../../Assets/Header svgs/burger-menu-svgrepo-com.svg";
import closeIcon from "../../Assets/Header svgs/close-svgrepo-com.svg";
import deliveryManImage from "../../Assets/Images/delivery-man.svg";
import homepageHeaderImage from "../../Assets/Header svgs/header-1.svg";
import boostaSauceLogo from "../../Assets/Logo/boosta_sauce_logo_cropped.svg";

import "./HomepageHeader.css";

const HomepageHeader = () => {
    const navigate = useNavigate();
    const [toggleMobileNavigation, setToggleMobileNavigation] = useState(false);

    const handleContactUsButtonClick = () => {
        navigate("/contact");
    };

    const onMobileNavigationButtonClick = () => {
        setToggleMobileNavigation((prev) => !prev);
    };

    return (
        <section className="header-container">
            {/* Left Section */}
            <section className="left-sub-section">
                <section className="logo-section">
                    <img src={boostaSauceLogo} alt="Boosta Sauce Logo" />
                </section>
                <section className="moto-section">
                    <h1>Fast. Reliable. Right to Your Door.</h1>
                    <p>
                        Local, and trusted, we deliver packages throughout Gauteng, South Africa. 
                        Get in touch for same-day and scheduled deliveries.
                    </p>
                </section>
                <section className="contact-us-section">
                    <Button title={"Contact Us"} onClick={handleContactUsButtonClick} />
                </section>
            </section>

            {/* Circles (desktop only) */}
            <section className="circles">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
            </section>

            {/* Right Section - Desktop images */}
            <section className="right-sub-section">
                <div className="header-image-wrapper">
                    <img src={homepageHeaderImage} alt="Homepage Header" className="header-bg" />
                    <img src={deliveryManImage} alt="Delivery Man" className="delivery-man" />
                </div>

                {/* Desktop navigation */}
                <nav>
                    <ul id="header-navigation" className="header-navigation">
                        <li><a href="#/home" className="navigation-link">Home</a></li>
                        <li><a href="#/services" className="navigation-link">Services</a></li>
                        <li><a href="#/contact" className="navigation-link">Contact Us</a></li>
                    </ul>
                </nav>
            </section>

            {/* Mobile toggle button */}
            <button 
                onClick={onMobileNavigationButtonClick}
                aria-controls="header-navigation"
                className="mobile-toggle-nav"
                aria-expanded={toggleMobileNavigation}
            >
                <img src={toggleMobileNavigation ? closeIcon : burgerIcon} alt="toggle mobile navigation icon"/>
            </button>

            {/* Mobile slide-in navigation */}
            <nav className="mobile-nav" data-visible={toggleMobileNavigation}>
                <ul>
                    <li><a href="#/home" className="navigation-link">Home</a></li>
                    <li><a href="#/services" className="navigation-link">Services</a></li>
                    <li><a href="#/contact" className="navigation-link">Contact Us</a></li>
                </ul>
            </nav>
        </section>
    );
};

export default HomepageHeader;
