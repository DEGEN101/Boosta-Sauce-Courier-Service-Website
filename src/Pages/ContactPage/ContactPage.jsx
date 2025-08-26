import Header2 from "../../Components/Header2/Header2";
import PageTitle from "../../Components/PageTitle/PageTitle";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Footer from "../../Components/Footer/Footer";

import "./ContactPage.css"

const ContactPage = () => {
 return (
        <>  
            <Header2 />
            <section className="title-section">
              <PageTitle title={"Contact Us"}/>
            </section>
            <section className="contact-hero">
              <h1 className="contact-title">Contact Us</h1>
              <p className="contact-subtitle">
                Request a quote by filling out the form below
              </p>
            <section className="contact-form">
                <ContactForm />
            </section>

          </section>

            <Footer />
        </>
    );
}

export default ContactPage;
