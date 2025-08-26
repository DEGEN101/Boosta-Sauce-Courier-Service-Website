import "./SubSubTitle.css";


const SubSubTitle = ({ icon, title }) => {
    return (
        <section className="subsubtitle-container">
            <img src={icon} alt="Subsubtitle icon"/>
            <h3> {title}</h3>
        </section>
    );
}

export default SubSubTitle;
