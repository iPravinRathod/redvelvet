import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Review from "./components/Review";

function App() {



	return (
		<div className="App">
			{/* <h1>React Frontend</h1> */}
			<div style={{ textAlign: "center" }}>
				<img src="/redvelvet-logo.jpeg" alt="logo" width="200" style={{ border: '1px solid green', align: 'center' }} />
			</div>
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
