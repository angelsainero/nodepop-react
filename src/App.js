import "./App.css";
import AdvertsPage from "./components/adverts/AdvertsPage";
import LoginPage from "./components/auth/LoginPage";
import { useState } from "react";
import NewAdvertPage from "./components/adverts/newAdvertPage";
import { Route, Routes, Navigate } from "react-router-dom";
import AdvertPage from "./components/adverts/AdvertPage";

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="adverts" />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/adverts"          
          element={isLogged ?<AdvertsPage onLogout={handleLogout} isLogged={isLogged} /> : <Navigate to="/login"/>}
        />
        <Route
          path="/adverts/new"
          element={isLogged ?
            <NewAdvertPage onLogout={handleLogout} isLogged={isLogged} /> : <Navigate to="/login"/>
          }
        />
        <Route
          path="/adverts/:id"
          element={<AdvertPage onLogout={handleLogout} isLogged={isLogged} />}
        />
        <Route path="/404" element={<div>404 || not found</div>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
