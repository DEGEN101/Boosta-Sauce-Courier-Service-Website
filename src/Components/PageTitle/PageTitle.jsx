
import "./PageTitle.css"

const PageTitle = ({ title }) => {
    return (
        <section className="page-title-container">
            <div className="left-circle"></div>
            <h1>{title}</h1>
            <div className="right-circle"></div>
        </section>
    );
}

export default PageTitle;
