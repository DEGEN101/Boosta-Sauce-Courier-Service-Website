
import HomepageHeader from "../../Components/HomepageHeader/HomepageHeader";
import Subtitle from "../../Components/Subtitle/Subtitle";
import Subtitle2 from "../../Components/Subtitle2/Subtitle2";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import Footer from "../../Components/Footer/Footer";

import deliveryTruckIcon from "../../Assets/Icons/delivery-truck-svgrepo-com.svg";
import clockIcon from "../../Assets/Icons/clock-svgrepo-com.svg";
import suzukiEcco12VImage from "../../Assets/Images/suzuki-ecco-1.2v-side-profile.png";
import courierExchangeMomentImage from "../../Assets/Images/courier-exchange-moment.png";
import saBoxesImage from "../../Assets/Images/sa-boxes.svg";

import "./Homepage.css"


const Homepage = () => {
    return (
        <>
            <HomepageHeader />

            <section className="homepage-body-container">
                <section className="sub-section">
                    <div className="img-section">
                        <img src={suzukiEcco12VImage} alt="Suzuki Ecco 1.2v"/>
                        <div className="gradient-line"></div>
                    </div>
                    <div className="information-section">
                        <Subtitle2 title={"Who We Are"}/>
                        <p>
                            At Boosta Sauce, we are all about speed, reliability and that extra boost of convenience. Our priority is simple: making sure your deliveries get to where they need to be quickly, safely and without any hassle.

                            We began with a simple idea. Deliveries should not be stressful. Whether it is an urgent parcel, important business documents or everyday items, you deserve a service that is dependable, transparent and run by people who care.
                        </p>
                    </div>
                </section>

                <section className="sub-section reverse">
                    <div className="img-section">
                        <img src={courierExchangeMomentImage} alt="Courier Exchange Moment"/>
                        <div className="gradient-line"></div>
                    </div>
                    <div className="information-section">
                        <Subtitle2 title={"Handled with Care"} reverse={true}/>
                        <p>
                            Every delivery matters. At Boosta Sauce, we treat your parcels with the same care and attention that you would. From the moment we collect your package to the moment it reaches its destination, we make sure it is secure, protected and delivered exactly as expected.
                            Whether it is a fragile item, valuable documents or everyday essentials, you can trust us to handle it with care and deliver it with pride across Gauteng.
                        </p>
                    </div>
                </section>

                <section className="services-section">
                    <Subtitle title={"Our Services"}/>
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
                </section>

                <section className="sub-section">
                    <div className="img-section">
                        <img src={saBoxesImage} alt="Boxes on SA"/>
                    </div>
                    <div className="information-section">
                        <Subtitle2 title={"Provincial Coverage"}/>
                        <p>
                            Our strength lies in knowing Gauteng inside and out. From Johannesburg to Pretoria and everywhere in between, Boosta Sauce is built to move your deliveries quickly and reliably across the province.

                            We understand the traffic, the routes and the pace of Gauteng life. That local knowledge allows us to provide faster turnarounds and a service you can count on, no matter where in the province you need your package to go.

                            With Boosta Sauce, your deliveries stay close to home — handled by a team that knows Gauteng best. 
                        </p>
                    </div>
                </section>
            </section>

            <Footer/>
        </>
    );
}

export default Homepage;
