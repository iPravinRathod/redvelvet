import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step2 = () => {
    const [familyDetails, setFamilyDetails] = useState("");
    const navigate = useNavigate();

    const handleNext = () => {
        localStorage.setItem("familyDetails", familyDetails);
        navigate("/review");
    };

    return (
        <div>
            <h2>Enter Family Details</h2>
            <textarea
                placeholder="Family Members Details"
                value={familyDetails}
                onChange={(e) => setFamilyDetails(e.target.value)}
            />
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default Step2;
