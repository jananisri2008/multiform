import React, { useState } from "react";
import "../styles/PaymentDetails.css";
function PaymentDetails({ formData, setFormData, prevStep, nextStep }) {
    const [errors, setErrors] = useState({});

    const validate = () => {
        const validationErrors = {};
        if (!formData.cardNumber) validationErrors.cardNumber = "Card number is required.";
        if (!formData.cvv) validationErrors.cvv = "CVV is required.";
        return validationErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            nextStep();
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="payment-details-container">
            <h2 className="payment-details-title">Step 3: Payment Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="label">Card Number</label>
                    <input
                        className="input-field"
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    />
                    {errors.cardNumber}
                </div>

                <div className="form-group">
                    <label className="label">CVV</label>
                    <input
                        className="input-field"
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                    />
                    {errors.cvv}
                </div>

                <div className="button-container">
                    <button  className="btn-back" type="button" onClick={prevStep}>Back</button>
                    <button  className="btn-next" type="submit">Next</button>
                </div>
            </form>
        </div>
    );
}

export default PaymentDetails;
