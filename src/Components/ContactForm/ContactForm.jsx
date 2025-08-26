import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    from: "",
    to: "",
    parcelType: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend/email service
    console.log("Form submitted:", form);
    alert("Quote request submitted successfully!");
    setForm({ from: "", to: "", parcelType: "", name: "", phone: "" });
  };

  return (
    <form className="contact-card" onSubmit={handleSubmit} noValidate>
      <div className="row">
        <div className="field">
          <label htmlFor="from">From</label>
          <input
            id="from"
            name="from"
            type="text"
            placeholder="e.g., Johannesburg"
            value={form.from}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="to">To</label>
          <input
            id="to"
            name="to"
            type="text"
            placeholder="e.g., Pretoria"
            value={form.to}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="parcelType">Type of Parcel</label>
        <input
          id="parcelType"
          name="parcelType"
          type="text"
          placeholder="e.g., Documents, Small Box"
          value={form.parcelType}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your full name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="e.g., 072 123 4567"
          value={form.phone}
          onChange={handleChange}
          required
          pattern="[\d\s()+-]{7,}"
        />
      </div>

      <button className="send-btn" type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
