import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [data, setData] = useState({});

	useEffect(() => {
		// Fetch data from the backend
		fetch("/api/data")
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div className="App">
			<h1>React Frontend</h1>
			<p>Message from backend: {data.message}</p>
		</div>
	);
}

export default App;
