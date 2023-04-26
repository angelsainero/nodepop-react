import { useState } from "react";
import { login } from "./service";
import Button from "../shared/button";
import { useNavigate } from "react-router-dom";


function LoginPage({ onLogin }) {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(credentials);

    //logueado
    onLogin();
    navigate('/adverts')
  };

  const handleChange = (event) => {
    // if (event.target.name === "email") {
    //   setCredentials({ ...credentials, email: event.target.value });
    //   //crea un nuevo objeto y sobreescribe la propiedad email
    // }
    // if (event.target.name === "password") {
    //   setCredentials({ ...credentials, password: event.target.value });
    // }
    //es lo mismo que:
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const buttonDisabled = !credentials.email || !credentials.password;

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={credentials.email}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={credentials.password}
        />
        <Button type="submit" variant="relleno" disabled={buttonDisabled}>
          Log In
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
