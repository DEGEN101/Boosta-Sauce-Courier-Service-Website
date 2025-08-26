import "./Button.css";


const Button = ({ title, onClick }) => {
    return (
        <section className="button-container">
            <section className="button-main" onClick={() => onClick()}>
                <p>{title}</p>
            </section>
        </section>
    );
}

export default Button;
