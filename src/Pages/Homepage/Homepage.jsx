
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import Footer from "../../Components/Footer/Footer";

import deliveryTruckIcon from "../../Assets/Icons/delivery-truck-svgrepo-com.svg";
import clockIcon from "../../Assets/Icons/clock-svgrepo-com.svg";

import "./Homepage.css"


const Homepage = () => {
    return (
        <>
            <h1> Home </h1>

            <section className="homepage-body-container">
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

            <Footer/>
        </>
    );
}

export default Homepage;
