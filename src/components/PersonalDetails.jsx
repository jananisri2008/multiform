import React from "react";
import "../styles/PersonalDetails.css";
function PersonalDetails({ formData, handleChange, nextStep }) {
    const { name, email, phone, gender} = formData;

    const handleNext = () => {
        if (name && email && phone && gender) {
            nextStep();
        } else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <div className="personal-details-container">
            <h2 className="personal-details-title">Step 1: Personal Details</h2>
            <input className="input-field" type="text" name="name" placeholder="Name" value={name} onChange={handleChange} />
            <input className="input-field" type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
            <input className="input-field" type="text" name="phone" placeholder="Phone" value={phone} onChange={handleChange} />
            <div className="gender-container">
                <span>Gender</span> 
                <input type="radio" name="gender" value="male" checked={gender==="male"} onChange={handleChange}/>Male
                <input type="radio" name="gender" value="female" checked={gender==="female"} onChange={handleChange}/>Female
            </div>
           
            <button className="button-next" onClick={handleNext}>Next</button>
        </div>
    );
}

export default PersonalDetails;
