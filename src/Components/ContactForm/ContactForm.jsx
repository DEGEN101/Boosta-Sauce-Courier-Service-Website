import { useForm } from "react-hook-form";
import sendEmail from "../../Services/EmailSender";

import "./ContactForm.css";

const ContactForm = () => {
    const {register, handleSubmit, reset, formState: { errors }} = useForm();

    const onSubmit = async (data) => {
        try {
            await sendEmail(data);
            alert("Quote request submitted successfully!");
            reset();
        } catch {
            alert("Failed to request quote. Please try again later.");
        }
    };

    return (
        <form className="contact-card" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="row">
                <div className="field">
                    <label htmlFor="from">From</label>
                    <input
                        id="from"
                        placeholder="e.g., Johannesburg"
                        {...register("from", { required: "Pickup location is required" })}
                    />
                    {errors.from && <span className="error">{errors.from.message}</span>}
                </div>
                <div className="field">
                    <label htmlFor="to">To</label>
                    <input
                        id="to"
                        placeholder="e.g., Pretoria"
                        {...register("to", { required: "Destination location is required." })}
                    />
                    {errors.to && <span className="error">{errors.to.message}</span>}
                </div>
            </div>

            <div className="field">
                <label htmlFor="parcelType">Type of Parcel</label>
                <input
                    id="parcelType"
                    placeholder="e.g., Documents, Small Box"
                    {...register("parcelType", { required: "Parcel type is required." })}
                />
                {errors.parcelType && <span className="error">{errors.parcelType.message}</span>}
            </div>

            <div className="field">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    placeholder="Your full name"
                    {...register("name", { required: "Name is required." })}
                />
                {errors.name && <span className="error">{errors.name.message}</span>}
            </div>

            <div className="field">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="johndoe@gmail.com"
                    {...register("email", {
                        required: "Email is required.",
                        pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address"
                        }
                    })}
                />
                {errors.email && <span className="error">{errors.email.message}</span>}
            </div>

            <div className="field">
                <label htmlFor="phone">Phone Number</label>
                <input
                    id="phone"
                    type="tel"
                    placeholder="e.g., 072 123 4567"
                    {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                        value: /^[\d\s()+-]{7,}$/,
                        message: "Enter a valid phone number."
                        }
                    })}
                />
                {errors.phone && <span className="error">{errors.phone.message}</span>}
            </div>

            <button className="send-btn" type="submit">
                Send
            </button>
        </form>
    );
};

export default ContactForm;
