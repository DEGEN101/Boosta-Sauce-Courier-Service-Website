
import HomepageHeader from "../../Components/HomepageHeader/HomepageHeader";
import Subtitle from "../../Components/Subtitle/Subtitle";
import Subtitle2 from "../../Components/Subtitle2/Subtitle2";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import Footer from "../../Components/Footer/Footer";

import deliveryTruckIcon from "../../Assets/Icons/delivery-truck-svgrepo-com.svg";
import clockIcon from "../../Assets/Icons/clock-svgrepo-com.svg";
import suzukiEcco12VImage from "../../Assets/Images/suzuki-ecco-1.2v-side-profile.png";
import courierExchangeMomentImage from "../../Assets/Images/courier-exchange-moment.svg";
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, id porttitor maecenas 
                            amet. Mattis quisque facilisi duis tellus lacus vitae. Malesuada nibh libero eget elementum 
                            in nec. Lorem auctor amet tristique est porttitor integer at. Risus massa id consectetur diam. 
                            Commodo nec, in tellus faucibus ornare elit bibendum risus lacinia. Ultrices porttitor sem 
                            ultricies amet. 
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, id porttitor maecenas 
                            amet. Mattis quisque facilisi duis tellus lacus vitae. Malesuada nibh libero eget elementum 
                            in nec. Lorem auctor amet tristique est porttitor integer at. Risus massa id consectetur diam. 
                            Commodo nec, in tellus faucibus ornare elit bibendum risus lacinia. Ultrices porttitor sem 
                            ultricies amet. 
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
                        <Subtitle2 title={"Nationwide Coverage"}/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, id porttitor maecenas 
                            amet. Mattis quisque facilisi duis tellus lacus vitae. Malesuada nibh libero eget elementum 
                            in nec. Lorem auctor amet tristique est porttitor integer at. Risus massa id consectetur diam. 
                            Commodo nec, in tellus faucibus ornare elit bibendum risus lacinia. Ultrices porttitor sem 
                            ultricies amet. 
                        </p>
                    </div>
                </section>
            </section>

            <Footer/>
        </>
    );
}

export default Homepage;
