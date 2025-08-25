import React, { useState } from "react";

import burgerIcon from "../../Assets/Header svgs/burger-menu-svgrepo-com.svg";
import closeIcon from "../../Assets/Header svgs/close-svgrepo-com.svg";

import "./Header2.css";

const Header2 = () => {
    const [toggleMobileNavigation, setToggleMobileNavigation] = useState(false);

    const onMobileNavigationButtonClick = () => {
        setToggleMobileNavigation((prev) => !prev);
    };

    return (
        <section className="header2-container">
            <section className="logo-section">
                <h1>Boosta</h1>
            </section>

            <button 
                onClick={onMobileNavigationButtonClick} aria-controls="header2-navigation" 
                className="mobile-toggle-nav" aria-expanded={toggleMobileNavigation}
            >
                <img src={toggleMobileNavigation ? closeIcon : burgerIcon} alt="toggle mobile navigation icon"/>
            </button>

            <div className="svg-container" data-visible={toggleMobileNavigation}>
                <svg className="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 155">
                    <path
                        d="M624.292 118.877C702.521 177.658 794.24 152.648 860 128.007L860 -246L155.945 -246L1.61431e-05 -246C407.503 -188.435 12.2932 -102.999 44.8722 -18.6691C72.4822 52.7987 200.784 -1.0537 325.297 102.146C449.809 205.345 490.844 30.5849 624.292 118.877Z"
                        fill="url(#paint0_linear_102_324)"
                    />
                    <defs>
                        <linearGradient id="paint0_linear_102_324" x1="860" y1="-45.5" x2="14.9126" y2="-55.1448" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0064D9" />
                            <stop offset="1" stopColor="#7D83FF" />
                        </linearGradient>
                    </defs>
                </svg>

                <nav>
                    <ul id="header2-navigation" className="header2-navigation" data-visible={toggleMobileNavigation}>
                        <li>
                            <a href="#/home" className="navigation-link">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#/services" className="navigation-link">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#/contact" className="navigation-link">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>

            <div className="circle-1" data-visible={toggleMobileNavigation}> </div>
            <div className="circle-2" data-visible={toggleMobileNavigation}> </div>
            <div className="circle-3" data-visible={toggleMobileNavigation}> </div>
        </section>
    );
};

export default Header2;
