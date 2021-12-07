import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";
import LoginForm from "./components/LoginForm";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [token, setToken] = useState<string | null>(null);
	const [userId, setUserId] = useState<string | null>(null);
	const queryClient = new QueryClient();
	console.log(token, userId);
	useEffect(() => {
		const storedToken = localStorage.getItem("accessToken");
		const storedId = localStorage.getItem("userId");
		if (storedToken) {
			setToken(storedToken);
		}
		if (storedId) {
			setUserId(storedId);
		}
		setIsLoading(false);
	}, [token, userId]);

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				{isLoading ? (
					<div>Loading</div>
				) : token && userId ? (
					<Routes>
						<Route
							path="/"
							element={
								<Dashboard setToken={setToken} userId={userId!} setUserId={setUserId} />
							}
						/>
					</Routes>
				) : (
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route
							path="/login"
							element={<LoginForm setToken={setToken} setUserId={setUserId} />}
						/>
					</Routes>
				)}
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
