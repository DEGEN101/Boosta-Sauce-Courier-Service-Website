import "./Subtitle.css"

const Subtitle = ({ title }) => {
    return (
        <section className="subtitle-container">
            <div className="left-circle"></div>
            <h1>{title}</h1>
            <div className="right-circle"></div>
        </section>
    );
}

export default Subtitle;
