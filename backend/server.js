const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/submit", (req, res) => {
	console.log("Received Data:", req.body);
	res.json({ message: "Feedback Received" });
});

app.listen(5001, () => console.log("Server running on port 5001"));
