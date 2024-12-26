import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import TravelOption from "./TravelOption";
import PaymentDetails from "./PaymentDetails";
import Summary from "./Summary";

function MultiForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        destination: "",
        origin:"",
        cardNumber: "",
        cvv: "",
    });

    const nextStep = () => setStep((prevStep) => prevStep + 1);
    const prevStep = () => setStep((prevStep) => prevStep - 1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        alert("Form submitted successfully!");
        console.log("Submitted Data:", formData);
    };

    return (
        <div className="multi-step-form">
            {step === 1 && <PersonalDetails formData={formData} handleChange={handleChange} nextStep={nextStep} />}
            {step === 2 && <TravelOption formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
            {step === 3 && <PaymentDetails formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
            {step === 4 && <Summary formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />}
        </div>
    );
}

export default MultiForm;
