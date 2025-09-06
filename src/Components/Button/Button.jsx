import "./Button.css";


const Button = ({ title, onClick }) => {
    return (
        <section className="button-container">
            <section className="button-main" onClick={() => onClick()}>
                <p className="title">{title}</p>
            </section>
        </section>
    );
}

export default Button;
