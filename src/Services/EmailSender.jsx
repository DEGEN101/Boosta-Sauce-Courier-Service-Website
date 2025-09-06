import emailjs from "@emailjs/browser";


const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

const sendEmail = async (formData) => {
    try {
        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                ...formData,
                time: new Date().toLocaleString("en-ZA", {timeZone: "Africa/Johannesburg", dateStyle: "full", timeStyle: "short"}),
                message: `Quote request for parcel type: ${formData.parcelType}`,
            },
            PUBLIC_KEY
        );
        return response;
    
    } catch (error) {
        console.error("EmailJS error:", error);
        throw error;
    }
};

export default sendEmail;
