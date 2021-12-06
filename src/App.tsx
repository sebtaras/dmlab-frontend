import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import LoginForm from "./components/LoginForm";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Homepage />} />
				<Route path="/login" element={<LoginForm />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
