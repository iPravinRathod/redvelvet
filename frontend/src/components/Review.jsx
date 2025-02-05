import { useEffect, useState } from "react";
import axios from "axios";

const Review = () => {
    const [data, setData] = useState({
        mobile: "",
        familyDetails: "",
    });

    useEffect(() => {
        setData({
            mobile: localStorage.getItem("mobile"),
            familyDetails: localStorage.getItem("familyDetails"),
        });
    }, []);

    const handleSubmit = async () => {
        try {
            await axios.post("http://localhost:5001/submit", data);
            alert("Feedback Submitted Successfully!");
            localStorage.clear();
        } catch (error) {
            console.error("Error submitting feedback", error);
        }
    };

    return (
        <div>
            <h2>Review Your Details</h2>
            <p><strong>Mobile:</strong> {data.mobile}</p>
            <p><strong>Family Details:</strong> {data.familyDetails}</p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Review;
