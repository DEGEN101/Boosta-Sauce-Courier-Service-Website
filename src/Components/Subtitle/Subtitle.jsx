import "./Subtitle.css"

const Subtitle = ({ title }) => {
    return (
        <section className="subtitle-container">
            <div className="circles-left">
                <div className="circle-top"></div>
                <div className="circle-bottom"></div>
            </div>
            <h1>{title}</h1>
            <div className="circles-right">
                <div className="circle-top"></div>
                <div className="circle-bottom"></div>
            </div>
        </section>
    );
}

export default Subtitle;
