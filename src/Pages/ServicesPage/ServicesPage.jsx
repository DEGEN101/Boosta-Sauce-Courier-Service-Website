import React from "react";
import { useNavigate } from "react-router-dom";

import Header2 from "../../Components/Header2/Header2";
import PageTitle from "../../Components/PageTitle/PageTitle";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import SubSubTitle from "../../Components/SubSubTitle/SubSubTitle";
import Footer from "../../Components/Footer/Footer";

import deliveryTruckIcon from "../../Assets/Icons/delivery-truck-svgrepo-com.svg";
import clockIcon from "../../Assets/Icons/clock-svgrepo-com.svg";
import locationPinIcon from "../../Assets/Icons/location-pin-svgrepo-com.svg";
import personIcon from "../../Assets/Icons/person-svgrepo-com.svg";
import clock2Icon from "../../Assets/Icons/clock2-svgrepo-com.svg";
import starIcon from "../../Assets/Icons/star-svgrepo-com.svg";
import suzukiEcco12VImage from "../../Assets/Images/suzuki-ecco-1.2v-side-profile.png";

import "./ServicesPage.css";
import Button from "../../Components/Button/Button";


const ServicesPage = () => {
    const navigate = useNavigate();

    const handleRequestQuoteButtonClick = () => {
        navigate("/contact");
    }

    return (
        <>  
            <Header2 />
            <section className="title-section">
                <PageTitle title={"Our Services"}/>
            </section>

            <section className="body-container">
                <section className="services-card-section">
                    <ServicesCard 
                        icon={deliveryTruckIcon} 
                        title={"By Land"} 
                        message={"Local delivery across Gauteng for documents, parcels, and custom packages — fast and reliable."} 
                    />
                    <ServicesCard 
                        icon={clockIcon} 
                        title={"More Coming Soon"} 
                        message={"Stay tuned for additional services including same-day delivery, tracking tools, and more."} 
                    />
                </section>

                <section className="services-description-section">
                    <h1> By Land - Our Core Offering </h1>
                    <p>
                        At MyCourier, we believe in connecting people, businesses, and communities throughout Gauteng with fast, 
                        secure, and reliable ground delivery.
                    </p>
                    <p>
                        Whether you're in Johannesburg, Pretoria, Soweto, Midrand, or anywhere in between, our ground fleet is 
                        always on the move, ensuring your documents and parcels arrive on time, every time.
                    </p>
                </section>

                <section className="services-items-section">
                    <section className="item">
                        <SubSubTitle icon={locationPinIcon} title={"What We Deliver"}/>
                        <ul>
                            <li> <p><b>Important Documents:</b> Legal files, contracts, academic records, certificates delivered securely and confidentially. </p></li>
                            <li> <p><b>Small to Medium Parcels:</b> From online orders to personal gifts, we ensure careful handling from pickup to drop-off. </p></li>
                            <li> <p><b>Custom Requests:</b> Have something unique? Contact us, we deliver a wide range of parcel types. </p></li>
                        </ul>
                    </section>
                    <section className="item">
                        <SubSubTitle icon={personIcon} title={"Who It's For"}/>
                        <ul>
                            <li> <p><b>Businesses:</b> Send client contracts, office supplies, and marketing packs quickly. </p></li>
                            <li> <p><b>Students & Professionals:</b> Fast delivery of certificates, IDs and documents. </p></li>
                            <li> <p><b>Online Sellers:</b> Affordable last-mile delivery for your customers. </p></li>
                        </ul>
                    </section>
                    <section className="item">
                        <SubSubTitle icon={clock2Icon} title={"Turnaround Time"}/>
                        <ul>
                            <li> <p><b>Same-day delivery:</b> Available in select areas for documents and small parcels. </p></li>
                            <li> <p><b>Next-day delivery:</b> Across most of Gauteng. </p></li>
                            <li> <p><b>Scheduled pickup:</b> Book your preferred time via call or online (coming soon). </p></li>
                        </ul>
                    </section>
                    <section className="item">
                        <SubSubTitle icon={starIcon} title={"Why Choose Us"}/>
                        <ul>
                            <li> <p><b>Gauteng-Focused:</b> We know your streets, your timetables, and your needs. </p></li>
                            <li> <p><b>Courier Branding:</b> Every delivery is done in a trusted MyCourier uniform and vehicle. </p></li>
                            <li> <p><b>Personal Support:</b> Get trustworthy, one-on-one assistance with every delivery. </p></li>
                        </ul>
                    </section>
                </section>
            </section>
            <section className="request-quote-section">
                <img src={suzukiEcco12VImage} alt="Suzuki Ecco 1.2V"/>
                <section className="circles">
                    <div className="circle-1"></div>
                    <div className="circle-2"></div>
                    <div className="circle-3"></div>
                </section>
                <section className="request-button-container">
                    <Button title={"Request Quote"} onClick={handleRequestQuoteButtonClick}/>
                </section>
            </section>
            <Footer />
        </>
    );
}

export default ServicesPage;
