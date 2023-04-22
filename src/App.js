import "./App.css";
import AdvertsPage from "./components/adverts/AdvertsPage";
import Button from "./components/shared/button";
import LoginPage from "./components/auth/LoginPage";
import { useState } from "react";

function App({isInitiallyLogged}) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true)
  }

  const handleLogout = () => {
    setIsLogged(false)
  }

  return (
    <div className="App">
      {isLogged ? <AdvertsPage onLogout={handleLogout}/> :
      <LoginPage onLogin={handleLogin}/>}
      
    </div>
  );
}

export default App;
