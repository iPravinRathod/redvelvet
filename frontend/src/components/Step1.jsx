import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
    const [mobile, setMobile] = useState("");
    const navigate = useNavigate();

    const handleNext = () => {
        localStorage.setItem("mobile", mobile); // Store temporarily
        navigate("/step2");
    };

    return (
        <div>
            <h2>Enter Mobile Number</h2>
            <input
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
            />
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default Step1;
