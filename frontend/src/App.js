import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Review from "./components/Review";

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
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Step1 />} />
					<Route path="/step2" element={<Step2 />} />
					<Route path="/review" element={<Review />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
