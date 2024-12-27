import React from "react";
import "../styles/TravelOption.css";
function TravelOption({ formData, handleChange, nextStep, prevStep }) {
    const { origin, destination, date, travelClass } = formData;

    const handleNext = () => {
        if (origin && destination && date && travelClass) {
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
            <div className="select-container">
                <label htmlFor="travelClass">Travel Class</label>
                <select name="travelClass" className="input-field" id="travelClass" value={travelClass} onChange={handleChange}>
                <option value="">Select Travel Class</option>
                <option value="ac">AC</option>
                <option value="non-ac">Non-AC</option>
                <option value="sleeper">Sleeper</option>
                </select>
            </div>
            <div className="button-container">
            <button  className="btn-back" onClick={prevStep}>Back</button>
            <button  className="btn-next" onClick={handleNext}>Next</button>
        </div>
        </div>
    );
}

export default TravelOption;
