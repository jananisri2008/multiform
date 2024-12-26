import React from "react";
import "../styles/Summary.css";
function Summary({ formData, submitForm,prevStep}) {
    const handleConfirm=()=>{
        alert("Booking Successfully.");
        submitForm();
    };
    return (
        <div className="summary-container">
            <h2 className="summary-title">Summary</h2>
            <div className="details-container">
            <p className="details-item"><strong>Name:</strong> {formData.name}</p>
            <p className="details-item"><strong>Email:</strong> {formData.email}</p>
            <p className="details-item"><strong>Phone No:</strong>{formData.phone}</p>
            <p className="details-item"><strong>Origin:</strong>{formData.origin}</p>
            <p className="details-item"><strong>Destination:</strong> {formData.destination}</p>
            <p className="details-item"><strong>Travel Date:</strong> {formData.date}</p>
            <p className="details-item"><strong>Card Number:</strong> {formData.cardNumber}</p>
            <p className="details-item"><strong>CVV:</strong> {formData.cvv}</p>
            </div>
            <div className="buttons-container">
            <button type="button" onClick={prevStep}>Back</button>
            <button onClick={handleConfirm}>Confirm Booking</button>
        </div>
        </div>
    );
}

export default Summary;
