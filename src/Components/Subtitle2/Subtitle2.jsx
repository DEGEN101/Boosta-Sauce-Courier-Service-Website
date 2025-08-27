import "./Subtitle2.css"

const Subtitle2 = ({ title, reverse=false }) => {
    return (
        <section className={`subtitle2-container${reverse ? " reverse" : ""}`}>
            <div className="double-circles">
                <div className="top-circle"></div>
                <div className="bottom-circle"></div>
            </div>
            <h1>{title}</h1>
        </section>
    );
}

export default Subtitle2;
