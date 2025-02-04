const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000; // Backend server port

// Middleware
app.use(cors());
app.use(express.json());

// Example API route
app.get("/api/data", (req, res) => {
	res.json({ message: "Hello from the backend!" });
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
