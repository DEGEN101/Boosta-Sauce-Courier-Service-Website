import "./ServicesCard.css"


const ServicesCard = ({ icon, title, message }) => {
    return (
        <article className="services-card-container">
            <img src={icon} alt={`${title} icon`} className="services-card-icon"/>
            <h2 className="services-card-title">{title}</h2>
            <p className="services-card-message">{message}</p>
        </article>
    );
}

export default ServicesCard;
