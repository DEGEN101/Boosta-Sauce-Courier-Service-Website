import "./Subtitle2.css"

const Subtitle2 = ({ title }) => {
    return (
        <section className="subtitle2-container">
            <div className="left-circle"></div>
            <h1>{title}</h1>
            <div className="right-circle"></div>
        </section>
    );
}

export default Subtitle2;
