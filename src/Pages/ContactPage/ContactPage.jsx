import Header2 from "../../Components/Header2/Header2";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Footer from "../../Components/Footer/Footer";

const ContactPage = () => {
    return (
        <>  
            <Header2 />
            <section className="title-section">
                <PageTitle title={"Contact Us"}/>
            </section>

            <Footer />
        </>
    );
}

export default ContactPage;
