import "./App.css";
import AdvertsPage from "./components/adverts/AdvertsPage";
import LoginPage from "./components/auth/LoginPage";
import { useState } from "react";
import NewAdvertPage from "./components/adverts/newAdvertPage";

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
      {isLogged ? (
        <>
        <AdvertsPage onLogout={handleLogout} isLogged={isLogged} />
        <NewAdvertPage onLogout={handleLogout} isLogged={isLogged} />
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
