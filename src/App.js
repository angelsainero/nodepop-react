import "./App.css";
import AdvertsPage from "./components/adverts/AdvertsPage";
import Button from "./components/shared/button";
import LoginPage from "./components/auth/LoginPage";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true)
  }

  return (
    <div className="App">
      {isLogged ? <AdvertsPage /> :
      <LoginPage onLogin={handleLogin}/>}
      <Button variant="relleno" onClick={(event) => console.log(event)}>
        Click me!{" "}
      </Button>
    </div>
  );
}

export default App;
