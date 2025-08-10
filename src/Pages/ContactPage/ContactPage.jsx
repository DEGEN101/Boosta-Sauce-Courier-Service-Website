import ContactForm from "../../Components/ContactForm/ContactForm";
import Footer from "../../Components/Footer/Footer";
import "./ContactPage.css"


const ContactPage = () => {
  return (
    <>
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
};

export default ContactPage;
