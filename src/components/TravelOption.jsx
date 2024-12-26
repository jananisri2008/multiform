import React from "react";
import "../styles/TravelOption.css";
function TravelOption({ formData, handleChange, nextStep, prevStep }) {
    const { origin, destination, date } = formData;

    const handleNext = () => {
        if (origin && destination && date) {
            nextStep();
        } else {
            alert("Please select a origin,destination and date.");
        }
    };

    return (
        <div className="travel-option-container">
            <h2 className="travel-option-title">Step 2: Travel Options</h2>
            <input type="text" className="input-field" name="origin" placeholder="Origin" value={origin} onChange={handleChange} />
            <input type="text" className="input-field" name="destination" placeholder="Destination" value={destination} onChange={handleChange} />
            <input type="date" className="input-field" name="date" value={date} onChange={handleChange} />
            <div className="button-container">
            <button  className="btn-back" onClick={prevStep}>Back</button>
            <button  className="btn-next" onClick={handleNext}>Next</button>
        </div>
        </div>
    );
}

export default TravelOption;
