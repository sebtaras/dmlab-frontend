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
  const queryClient = new QueryClient();

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    console.log(storedToken);
    if (storedToken) {
      setToken(storedToken);
    }
    setIsLoading(false);
  }, [token]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {isLoading ? (
          <div>Loading</div>
        ) : token ? (
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginForm setToken={setToken} />} />
          </Routes>
        )}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
